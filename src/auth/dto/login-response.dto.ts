import { IsNotEmpty, IsString } from 'class-validator';
import { Grant } from '../../common/enums/grant.enum';

export class LoginResponseDTO {
  @IsNotEmpty()
  @IsString()
  accessToken: string;

  @IsNotEmpty()
  @IsString()
  refreshToken: string;

  @IsNotEmpty()
  @IsString()
  grantType: Grant = Grant.SITE_AUTH;
}
