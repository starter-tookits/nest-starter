import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { Log4jsModule } from '@nestx-log4js/core';

@Module({
  imports: [
    TerminusModule,
    Log4jsModule.forRoot()
  ]
})
export class AppModule {
}
