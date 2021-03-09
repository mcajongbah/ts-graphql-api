import { Query, Resolver } from "type-graphql";

@Resolver()
export class userResolver {
  @Query(() => String)
  async helloWorld() {
    return "Hello World!";
  }
}
