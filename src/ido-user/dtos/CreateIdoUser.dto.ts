import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateIdoUser {
    @IsNotEmpty()
    @MinLength(3)
    address: string;

    @IsNotEmpty()
    @MinLength(9)
    ts: number;

    @IsNotEmpty()
    @IsString()
    typeStake: string;
}