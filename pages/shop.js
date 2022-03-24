// import NavBar from "../components/NavBar"

// /*
//   This example requires Tailwind CSS v2.0+ 
  
//   This example requires some changes to your config:
  
//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/aspect-ratio'),
//     ],
//   }
//   ```
// */
// const products = [
//     {
//       id: 1,
//       name: 'Basic Tee',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$35',
//       color: 'Black',
//     },
//     {
//         id: 2,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://www.zeeman.com/media/catalog/product/2/0/2020001484706_Front.jpg?quality=90&fit=bounds&height=700&width=700&canvas=700:700',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//       },
//       {
//         id: 3,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://www.odesign.tn/2-large_default/hummingbird-printed-t-shirt.jpg',
//         price: '$35',
//         color: 'Black',
//       },
//       {
//         id: 4,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://www.dunhill.com/product_image/12574727np/f/w750_be4e4e4.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//       },
//       {
//         id: 5,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|540:540',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$35',
//         color: 'Black',
//       },
//     // More products...
//   ]
  
//   export default function Example() {
//     return (
//       <div className="bg-black">
//           <NavBar />
//         <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//           <h2 className="text-2xl font-extrabold tracking-tight text-white">Customers also purchased</h2>
//           <h1 className="text-white text-3xl font-semibold">
//             Discover our product
//           </h1>
//             <p className="text-white ml-3">Buy now and join the comunity {""}
//                 <span className="text-blue">
//                     BOLD
//                 </span>
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16 gap-x-5">
//                 {/* <div className="">
//                     <h3 className="text-white text-lg">Filtre</h3>
//                     <input type="text" className="p-2 rounded-full my-1 bg-cyan placeholder:text-purple" placeholder="Search for smthg"/>
//                 </div> */}
//                 <div class="text-white rounded-2xl bg-gray-900 w-full md:w-72 h-auto">
//                     <div class="rounded-xl container pt-5 flex justify-center">
//                         <div class="mb-3 w-full xl:w-96">
//                         <h1 class="text-2xl text-purple-600 text-center">FILTERING</h1>
//                         <br />
//                         Category 
//                         <select class="text-black form-select appearance-none block w-full px-3 py-1.5 text-base font-normal bg-gray-800 bg-clip-padding bg-no-repeat border border-solid border-gray-700 rounded-md transition duration-300 ease-in-out m-0 focus:border-gray-500 focus:outline-none">
//                             <option selected>Category</option>
//                             <option value="1">One</option>
//                             <option value="2">Two</option>
//                             <option value="3">Three</option>
//                         </select>
//                         <br />
//                         Ranking 
//                         <select class="text-black form-select appearance-none block w-full px-3 py-1.5 text-base font-normal bg-gray-800 bg-clip-padding bg-no-repeat border border-solid border-gray-700 rounded-md transition duration-300 ease-in-out m-0 focus:border-gray-500 focus:outline-none">
//                             <option selected>Rank</option>
//                             <option value="1">One</option>
//                             <option value="2">Two</option>
//                             <option value="3">Three</option>
//                         </select>
//                         <br/>
//                         Search 
//                         <input class="text-black form-select appearance-none block w-full px-3 py-1.5 text-base font-normal bg-gray-800 bg-clip-padding bg-no-repeat border border-solid border-gray-700 rounded-md transition duration-300 ease-in-out m-0 focus:border-gray-500 focus:outline-none" placeholder="Tap smthg" />
//                         <br />
//                         <button class="mb-3 border-2 border-purple-600 text-white hover:bg-green hover:text-blue w-full py-2 rounded-md text-1xl font-medium hover:bg-purple-600 transition duration-300">APPLY</button>
//                         </div>
//                     </div>
//                     </div>
//                 <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 col-span-3">
//                     {products.map((product) => (
//                     <div key={product.id} className="group relative bg-black rounded-xl bg-opacity-75 shadow-md shadow-green">
//                         <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:h-80 lg:aspect-none p-2">
//                         <img
//                             src={product.imageSrc}
//                             alt={product.imageAlt}
//                             className="w-full h-full object-center object-cover lg:w-full lg:h-full rounded-xl"
//                         />
//                         </div>
//                         <div className="mt-1 flex justify-between p-3">
//                         <div>
//                             <h3 className="text-lg text-white">
//                             <a href={product.href}>
//                                 <span aria-hidden="true" className="absolute inset-0" />
//                                 {product.name}
//                             </a>
//                             </h3>
//                             <p className="mt-1 text-sm text-white">{product.color}</p>
//                         </div>
//                         <p className="text-lg font-semibold text-white">{product.price}</p>
//                         </div>
//                     </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//       </div>
//     )
//   }
  
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import NavBar from '../components/NavBar'

const products = [
        {
          id: 1,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://www.zeeman.com/media/catalog/product/2/0/2020001484706_Front.jpg?quality=90&fit=bounds&height=700&width=700&canvas=700:700',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 3,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://www.odesign.tn/2-large_default/hummingbird-printed-t-shirt.jpg',
            price: '$35',
            color: 'Black',
          },
          {
            id: 4,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://www.dunhill.com/product_image/12574727np/f/w750_be4e4e4.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
          {
            id: 5,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|540:540',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
          },
        // More products...
      ]

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-black">
        <NavBar />
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-black shadow-xl shadow-green py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-white">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories</h3>
                  <ul role="list" className="font-medium text-white px-2 py-3">
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href} className="block px-2 py-3">
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="px-2 py-3 bg-white rounded-full w-full flex items-center justify-between text-black hover:text-gray-500">
                              <span className="font-medium text-black">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 border-gray-300 rounded text-black focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-white">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-blue">
                    Sort
                    <ChevronDownIcon
                      className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 shadow-2xl shadow-green bg-white rounded-full ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-blue' : 'text-white',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View grid</span>
                <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="text-sm font-medium text-white space-y-4 pb-6 border-b border-gray-200">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 px-1 rounded-xl bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-black">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-white focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-white"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content */}
                {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full" /> */}
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 col-span-3">
                     {products.map((product) => (
                    <div key={product.id} className="group relative bg-black rounded-xl bg-opacity-75 shadow-md shadow-green">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:h-80 lg:aspect-none p-2">
                        <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="w-full h-full object-center object-cover lg:w-full lg:h-full rounded-xl"
                        />
                        </div>
                        <div className="mt-1 flex justify-between p-3">
                        <div>
                            <h3 className="text-lg text-white">
                            <a href={product.href}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                            </a>
                            </h3>
                            <p className="mt-1 text-sm text-white">{product.color}</p>
                        </div>
                        <p className="text-lg font-semibold text-white">{product.price}</p>
                        </div>
                    </div>
                    ))}
                    </div>
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
