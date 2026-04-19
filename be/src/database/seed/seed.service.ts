import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { seedRoles } from './seeds/role.seed';
import { seedProvinces } from './seeds/province.seed';
import { seedWards } from './seeds/ward.seed';
import { seedUsers } from './seeds/user.seed';
import { seedCategories } from './seeds/category.seed';
import { seedProducts } from './seeds/product.seed';
import { seedPromotions } from './seeds/promotion.seed';
import { seedDesigns } from './seeds/design.seed';
import { seedProjects } from './seeds/project.seed';
import { seedPayments } from './seeds/payment.seed';
import { seedOrders } from './seeds/order.seed';
import { seedReviews } from './seeds/review.seed';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  constructor(
    @InjectModel('Role') private roleModel: Model<any>,
    @InjectModel('User') private userModel: Model<any>,
    @InjectModel('Province') private provinceModel: Model<any>,
    @InjectModel('Ward') private wardModel: Model<any>,
    @InjectModel('Category') private categoryModel: Model<any>,
    @InjectModel('Product') private productModel: Model<any>,
    @InjectModel('Promotion') private promotionModel: Model<any>,
    @InjectModel('Design') private designModel: Model<any>,
    @InjectModel('Project') private projectModel: Model<any>,
    @InjectModel('ProjectPayment') private paymentModel: Model<any>,
    @InjectModel('Order') private orderModel: Model<any>,
    @InjectModel('Review') private reviewModel: Model<any>,
  ) {}

  async onApplicationBootstrap() {
    if (process.env.AUTO_SEED !== 'true') return;

    const count = await this.roleModel.countDocuments();
    if (count > 0) {
      console.log('⚠️ DB already has data → skip');
      return;
    }

    console.log('🌱 START SEEDING...');

    const roleMap = await seedRoles(this.roleModel);
    const provinceMap = await seedProvinces(this.provinceModel);
    const wardMap = await seedWards(this.wardModel, provinceMap);
    const userMap = await seedUsers(
      this.userModel,
      roleMap,
      provinceMap,
      wardMap,
    );

    const categories = await seedCategories(this.categoryModel);
    const products = await seedProducts(this.productModel, categories);

    await seedPromotions(this.promotionModel, products);

    const designs = await seedDesigns(this.designModel, categories, userMap);
    const projects = await seedProjects(
      this.projectModel,
      userMap,
      categories,
      designs,
    );

    await seedPayments(this.paymentModel, projects, userMap);
    await seedOrders(this.orderModel, userMap);
    await seedReviews(this.reviewModel, userMap, products);

    console.log('✅ SEED DONE!');
  }
}
