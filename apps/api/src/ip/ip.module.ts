import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IpRepository } from './ip.repository';
import { IpService } from './ip.service';
import { Ip } from '@waggle/entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ip])],
  providers: [IpService, IpRepository],
  exports: [TypeOrmModule, IpService],
})
export class IpModule {}
