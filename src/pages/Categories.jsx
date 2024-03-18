import React from 'react'
import { NavLink } from 'react-router-dom';


const Categories = () => {

  const callouts = [
    {
      name: 'Mens Page',
      description: 'Mens Shirts',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      link: '/menpage',
    },
    {
      name: 'Womens Page',
      description: 'Womens Dress',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      link: '/womenpage',
    },
  ]
  return (
    <div className="bg-gray-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-slate-200 ">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 ml-[20%]">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  {/* <a href={callout.href}> */}
                    <NavLink to={callout.link}>
                    <span className="absolute inset-0" />
                    {callout.name}
                    </NavLink>
                  {/* </a> */}
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories;