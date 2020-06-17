import { h } from 'hyperapp'

const LoadingFish = () => (
  <div class="text-xl text-pink font-bold loading fish"></div>
)

const WholeLoadingFish = () => (
  <section class="flex justify-center items-center -mt-24">
    {LoadingFish()}
  </section>
)

export { LoadingFish, WholeLoadingFish }
