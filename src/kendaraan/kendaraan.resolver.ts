import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { KendaraanService } from './kendaraan.service';
import { Kendaraan } from './entities/kendaraan.entity';
import { CreateKendaraanInput } from './dto/create-kendaraan.input';
import { UpdateKendaraanInput } from './dto/update-kendaraan.input';

@Resolver(() => Kendaraan)
export class KendaraanResolver {
  constructor(private readonly kendaraanService: KendaraanService) {}

  @Mutation(() => Kendaraan)
  createKendaraan(
    @Args('createKendaraanInput') createKendaraanInput: CreateKendaraanInput,
  ) {
    return this.kendaraanService.create(createKendaraanInput);
  }

  @Query(() => [Kendaraan], { name: 'kendaraan' })
  findAll() {
    return this.kendaraanService.findAll();
  }

  @Query(() => Kendaraan, { name: 'kendaraanById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.kendaraanService.findOne(id);
  }

  @Mutation(() => Kendaraan)
  updateKendaraan(
    @Args('updateKendaraanInput') updateKendaraanInput: UpdateKendaraanInput,
  ) {
    return this.kendaraanService.update(
      updateKendaraanInput.id,
      updateKendaraanInput,
    );
  }

  @Mutation(() => Kendaraan)
  removeKendaraan(@Args('id', { type: () => Int }) id: number) {
    return this.kendaraanService.remove(id);
  }
}
