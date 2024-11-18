import { IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator"

export class CreateSongDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    author: string

    @IsInt()
    @IsNotEmpty()
    @Min(0)
    length: number

    @IsInt()
    @IsNotEmpty()
    @Min(0)
    price: number

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    @Max(5)
    rating: number
}
