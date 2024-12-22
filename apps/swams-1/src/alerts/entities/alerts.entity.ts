import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Alert {
  @Field()
  id!: string;

  @Field()
  buildingId!: string;

  @Field()
  message!: string;

  @Field()
  severity!: string;

  @Field()
  isActive!: boolean;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}