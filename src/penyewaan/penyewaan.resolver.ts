import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PenyewaanService } from './penyewaan.service';
import { Penyewaan } from './entities/penyewaan.entity';
import { CreatePenyewaanInput } from './dto/create-penyewaan.input';
import { UpdatePenyewaanInput } from './dto/update-penyewaan.input';

@Resolver(() => Penyewaan)
export class PenyewaanResolver {
  constructor(private readonly penyewaanService: PenyewaanService) {}

  @Mutation(() => Penyewaan)
  createPenyewaan(
    @Args('createPenyewaanInput') createPenyewaanInput: CreatePenyewaanInput,
  ) {
    return this.penyewaanService.create(createPenyewaanInput);
  }

  @Query(() => [Penyewaan], { name: 'penyewaan' })
  findAll() {
    return this.penyewaanService.findAll();
  }

  @Query(() => Penyewaan, { name: 'penyewaanById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.penyewaanService.findOne(id);
  }

  @Mutation(() => Penyewaan)
  updatePenyewaan(
    @Args('updatePenyewaanInput') updatePenyewaanInput: UpdatePenyewaanInput,
  ) {
    return this.penyewaanService.update(
      updatePenyewaanInput.id,
      updatePenyewaanInput,
    );
  }

  @Mutation(() => Penyewaan)
  removePenyewaan(@Args('id', { type: () => Int }) id: number) {
    return this.penyewaanService.remove(id);
  }
}
