export default function CourseDetails() {
  return (
    <div>
      <div className="bg-blue-900">
        <div className="flex flex-col mt-15 max-w-sm m-auto md:max-w-xl lg:max-w-5xl py-10">
          <p>Breadcrumb</p>
          <h1 className="text-3xl font-bold">Título do post</h1>
        </div>
      </div>

      <div className="flex flex-col mt-15 max-w-sm m-auto md:max-w-xl lg:max-w-5xl">
        
        <div className="grid grid-cols-[3fr_1fr] gap-20 mt-10 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="font-semibold text-2xl">Pipipipópopopo & etcetera</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, non facere beatae veniam sequi sed aliquid maxime suscipit cum. Doloremque officiis facere iusto sunt accusamus magni voluptates nam nulla. Dolorem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil fugiat porro voluptate nam voluptatem repellendus placeat expedita obcaecati aspernatur excepturi praesentium laborum nostrum quibusdam tempore, iure illum. Est, velit accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde accusamus error dolorem minus ipsam, harum laboriosam doloremque cum tenetur illo labore expedita at numquam incidunt! Voluptas placeat temporibus optio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto facere tempora aliquam tempore et! Sed, corrupti adipisci! Explicabo sapiente obcaecati porro, nihil debitis voluptatum quis, aut vero vel recusandae sint!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, non facere beatae veniam sequi sed aliquid maxime suscipit cum. Doloremque officiis facere iusto sunt accusamus magni voluptates nam nulla. Dolorem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil fugiat porro voluptate nam voluptatem repellendus placeat expedita obcaecati aspernatur excepturi praesentium laborum nostrum quibusdam tempore, iure illum. Est, velit accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde accusamus error dolorem minus ipsam, harum laboriosam doloremque cum tenetur illo labore expedita at numquam incidunt! Voluptas placeat temporibus optio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto facere tempora aliquam tempore et! Sed, corrupti adipisci! Explicabo sapiente obcaecati porro, nihil debitis voluptatum quis, aut vero vel recusandae sint!</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg shadow-xl/30">
            <h3 className="font-semibold text-lg mb-5">Compartilhar</h3>
            <div className="flex flex-col gap-3">
            </div>
            <div className="flex flex-col gap-3 mt-10">
              <h3>Assine nossa newsletter</h3>
              <input type="email" placeholder="Email" className="border-1 border-gray-400 p-2 text-sm rounded" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}