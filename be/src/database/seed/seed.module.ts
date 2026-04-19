import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleSchema } from '../schemas/role.schema';
import { UserSchema } from '../schemas/user.schema';
import { ProvinceSchema } from '../schemas/province.schema';
import { WardSchema } from '../schemas/ward.schema';
import { CategorySchema } from '../schemas/category.schema';
import { ProductSchema } from '../schemas/product.schema';
import { PromotionSchema } from '../schemas/promotion.schema';
import { DesignSchema } from '../schemas/design.schema';
import { ProjectSchema } from '../schemas/project.schema';
import { ProjectPaymentSchema } from '../schemas/project-payment.schema';
import { OrderSchema } from '../schemas/order.schema';
import { ReviewSchema } from '../schemas/review.schema';
import { SeedService } from './seed.service';

// src/database/seed/seed.module.ts
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Role', schema: RoleSchema },
      { name: 'User', schema: UserSchema },
      { name: 'Province', schema: ProvinceSchema },
      { name: 'Ward', schema: WardSchema },
      { name: 'Category', schema: CategorySchema },
      { name: 'Product', schema: ProductSchema },
      { name: 'Promotion', schema: PromotionSchema },
      { name: 'Design', schema: DesignSchema },
      { name: 'Project', schema: ProjectSchema },
      { name: 'ProjectPayment', schema: ProjectPaymentSchema },
      { name: 'Order', schema: OrderSchema },
      { name: 'Review', schema: ReviewSchema },
    ]),
  ],
  providers: [SeedService],
})
export class SeedModule {}
