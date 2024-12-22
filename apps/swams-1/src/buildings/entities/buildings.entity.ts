import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Building {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  location: string;

  @Field()
  floors: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}