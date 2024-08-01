import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email' })
  email: string;
  @IsNotEmpty({ message: 'Full name is required' })
  @IsString({ message: 'Full name must be a string' })
  @Length(1, 60, { message: 'Full name must be between 1 and 60 characters' })
  fullName: string;
  @IsNotEmpty({ message: 'Username is required' })
  @Length(3, 20, { message: 'Username must be between 3 and 30 characters' })
  // @Matches(
  //   new RegExp('^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{2,29}$'),
  //   {
  //     message: 'Invalid username',
  //   }
  // )
  username: string;
  @IsNotEmpty({ message: 'Password is required' })
  @Length(8, 20, { message: 'Password must be between 8 and 20 characters' })
  password: string;
}
