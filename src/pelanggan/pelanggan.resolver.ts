import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PelangganService } from './pelanggan.service';
import { Pelanggan } from './entities/pelanggan.entity';
import { CreatePelangganInput } from './dto/create-pelanggan.input';
import { UpdatePelangganInput } from './dto/update-pelanggan.input';

@Resolver(() => Pelanggan)
export class PelangganResolver {
  constructor(private readonly pelangganService: PelangganService) {}

  @Mutation(() => Pelanggan)
  createPelanggan(
    @Args('createPelangganInput')
    createPelangganInput: CreatePelangganInput,
  ) {
    return this.pelangganService.create(createPelangganInput);
  }

  @Query(() => [Pelanggan], { name: 'pelanggan' })
  findAll() {
    return this.pelangganService.findAll();
  }

  @Query(() => Pelanggan, { name: 'pelangganById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pelangganService.findOne(id);
  }

  @Mutation(() => Pelanggan)
  updatePelanggan(
    @Args('updatePelangganInput') updatePelangganInput: UpdatePelangganInput,
  ) {
    return this.pelangganService.update(
      updatePelangganInput.id,
      updatePelangganInput,
    );
  }

  @Mutation(() => Pelanggan)
  removePelanggan(@Args('id', { type: () => Int }) id: number) {
    return this.pelangganService.remove(id);
  }
}
