import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Maintenance {
  @Field()
  id: string;

  @Field()
  description: string;

  @Field()
  status: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  scheduledDate: Date;

  @Field()
  completedDate?: Date;
}