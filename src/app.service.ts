import { Injectable } from '@nestjs/common';
import { getRootHash, getClaimming } from "./utils/merkleTree";

@Injectable()
export class AppService {
  getSignature(userAdd: string): string {
    getClaimming(userAdd);
    return 'Hello World!';
  }
}
