import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect,
  Req,
  Res
} from '@nestjs/common';
import { Request, Response } from 'express'
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private readonly productService: ProductsService) {

  }

  @Get()
  getAll() {
    return this.productService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id) {
    return this.productService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id): string {
    return `Removed ${id}`
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): string {
    return `Updated ${id}`
  }

  // Examples:
  // Redirect
  // @Get('/path/resource')
  // @Redirect('https://google.com', 301) 
  // methodName() { return 'bla bla' }

  // Status code changed:
  // @Post()
  // @HttpCode(HttpStatus.CREATED)
  // methodName(@Body() createProductDto: CreateProductDto): string {
  //   return `Title: ${createProductDto.title}, Price: ${createProductDto.price}`
  // }

  // Headers are added
  // @Post()
  // @Header('Cache-Control', 'none')
  // methodName(@Body() createProductDto: CreateProductDto): string {
  //   return `Title: ${createProductDto.title}, Price: ${createProductDto.price}`
  // }

  // Access to req and res - DO NOT DO THIS!
  // @Get()
  // methName(@Req() Req: Request, @Res() res: Response) {
  //   res.status(200).end()
  // }
}
