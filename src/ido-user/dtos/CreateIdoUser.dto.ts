import { IsNotEmpty, MinLength } from "class-validator";

export class CreateIdoUser {
    @IsNotEmpty()
    @MinLength(3)
    address: string;
}