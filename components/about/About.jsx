/* eslint-disable @next/next/no-img-element */
const About = () => {
  return (
    <section
      id="about"
      class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4"
    >
      <p class="font-normal text-lg leading-3 text-indigo-700 dark:text-indigo-500 hover:text-indigo-800 cursor-pointer pb-2">
        About us
      </p>
      <div class="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div class="w-full lg:w-6/12">
          <h2 class="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-indigo-600 leading-9">
            We are here to make great design accessible and delightfull for
            everyone
          </h2>
          <p class="font-normal text-base leading-6 text-gray-600 dark:text-slate-800 mt-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire,
          </p>
        </div>
        <div class="w-full lg:w-6/12">
          <img
            class="lg:block hidden w-full"
            src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png"
            alt="people discussing on board"
          />
          <img
            class="lg:hidden sm:block hidden w-full"
            src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png"
            alt="people discussing on board"
          />
          <img
            class="sm:hidden block w-full"
            src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png"
            alt="people discussing on board"
          />
        </div>
      </div>

      <div class="relative mt-24">
        <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div class="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg"
              alt="flag"
            />
          </div>

          <img
            class="z-20"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg"
            alt="note"
          />

          <img
            class="z-20 sm:block hidden"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
            alt="users"
          />
        </div>
        <hr class="z-10 absolute top-2/4 w-full bg-red-800" />
      </div>
      <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
          <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-indigo-600 mt-6">
            Founded
          </p>
          <p class="font-normal text-base leading-6 text-gray-600 dark:text-slate-800 mt-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div>
          <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-indigo-600 mt-6">
            50M montly enrichments
          </p>
          <p class="font-normal text-base leading-6 text-gray-600 dark:text-slate-800 mt-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div class="sm:block hidden">
          <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-slate-800 dark:text-indigo-600 mt-6">
            400k User
          </p>
          <p class="font-normal text-base leading-6 text-slate  -600 dark:text-slate-800 mt-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <div class="sm:hidden block relative mt-8">
        <div class="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
            alt="user"
          />
        </div>
        <hr class="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>
      <div class="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
          <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">
            400k User
          </p>
          <p class="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
