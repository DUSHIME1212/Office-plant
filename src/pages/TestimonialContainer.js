const TestimonialContainer = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start bg-[url('/public/home@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[1024px] max-w-full text-left text-45xl text-white font-italiana">
        <div className="w-[803px] bg-darkslategray-100 overflow-hidden flex flex-col items-center justify-center py-[200px] px-5 box-border mix-blend-hard-light min-h-[1024px] max-w-full mq450:pt-[84px] mq450:pb-[84px] mq450:box-border mq1050:pt-[130px] mq1050:pb-[130px] mq1050:box-border">
          <div className="w-[603px] flex flex-col items-start justify-start gap-[30px] max-w-full">
            <h1 className="m-0 self-stretch h-[225px] relative text-inherit font-normal font-inherit inline-block mq750:text-32xl mq450:text-19xl">
              Welcome to our Office Plants and Garden Essentials
            </h1>
            <div className="w-[458px] h-[81px] relative text-xl font-manrope inline-block max-w-full mq450:text-base">
              Create a refreshing and vibrant workspace with our wide selection
              of office plants and garden essentials.
            </div>
            <button className="cursor-pointer py-2.5 px-[27px] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="h-[27px] relative text-xl capitalize font-manrope text-white text-left inline-block mq450:text-base">
                our products
              </div>
            </button>
          </div>
        </div>
        <header className="self-stretch h-20 bg-black overflow-hidden shrink-0 flex flex-row items-center justify-between py-5 px-[100px] box-border mix-blend-lighten gap-[20px] top-[0] z-[99] sticky max-w-full mt-[-1024px] text-left text-xl text-white font-italiana mq750:pl-[25px] mq750:pr-[25px] mq750:box-border mq1050:pl-[50px] mq1050:pr-[50px] mq1050:box-border">
          <div className="relative capitalize whitespace-nowrap">logo</div>
          <div className="h-[37.1px] w-[533.1px] flex flex-row items-center justify-start gap-[47.07px] max-w-full text-mid-1 mq750:hidden mq750:gap-[24px]">
            <div className="flex flex-row items-center justify-center py-[8.557692527770996px] px-[7px]">
              <div className="relative capitalize whitespace-nowrap">
                Office Plants
              </div>
            </div>
            <div className="flex flex-row items-center justify-center py-[8.557692527770996px] px-[7px]">
              <div className="relative capitalize whitespace-nowrap">
                Garden Home
              </div>
            </div>
            <div className="flex flex-row items-center justify-center py-[8.557692527770996px] px-[7px]">
              <div className="relative capitalize whitespace-nowrap">
                About Us
              </div>
            </div>
            <div className="self-stretch w-[85.6px] flex flex-row items-center justify-between">
              <div className="relative capitalize">Services</div>
              <img
                className="h-[20.5px] w-[20.5px] relative overflow-hidden shrink-0"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
          </div>
          <button className="cursor-pointer py-2.5 px-[27px] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
            <div className="h-[27px] relative text-xl capitalize font-manrope text-white text-left inline-block whitespace-nowrap">
              our products
            </div>
          </button>
        </header>
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-center py-[100px] px-5 box-border gap-[0px] [row-gap:20px] max-w-full text-left text-xl text-darkslategray-100 font-manrope mq450:pt-[42px] mq450:pb-[42px] mq450:box-border mq1050:pt-[65px] mq1050:pb-[65px] mq1050:box-border mq1225:flex-wrap">
        <div className="w-[651px] flex flex-col items-start justify-start gap-[36px] min-w-[651px] max-w-full mq750:gap-[18px] mq750:min-w-full mq1225:flex-1">
          <h1 className="m-0 self-stretch h-[150px] relative text-45xl font-normal font-italiana inline-block mq750:text-32xl mq450:text-19xl">
            Bringing Nature's Beauty into Your Space
          </h1>
          <div className="self-stretch h-[81px] relative inline-block mq450:text-base">
            Experience the numerous benefits of having plants in your office or
            home. Not only do they purify the air, but they also enhance the
            aesthetics of your space.
          </div>
          <div className="w-[474px] flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="self-stretch flex flex-row items-center justify-between gap-[16px]">
              <input
                className="m-0 h-5 w-5 relative box-border border-[1px] border-solid border-darkslategray-100"
                type="checkbox"
              />
              <div className="relative mq450:text-base">
                Improved Air Quality for a Healthier Environment
              </div>
            </div>
            <div className="w-[437px] flex flex-row items-center justify-between gap-[16px] max-w-full">
              <input
                className="m-0 h-5 w-5 relative box-border border-[1px] border-solid border-darkslategray-100"
                type="checkbox"
              />
              <div className="relative mq450:text-base">
                Enhanced Visual Appeal with Lush Greenery
              </div>
            </div>
            <div className="w-[432px] flex flex-row items-center justify-between gap-[14px] max-w-full">
              <input
                className="m-0 h-5 w-5 relative box-border border-[1px] border-solid border-darkslategray-100"
                type="checkbox"
              />
              <div className="relative mq450:text-base">
                Create a Calming and Relaxing Atmosphere
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-2.5 px-[27px] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-darkslategray-100 hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
            <div className="h-[27px] relative text-xl capitalize font-manrope text-darkslategray-100 text-left inline-block mq450:text-base">
              our products
            </div>
          </button>
        </div>
        <img
          className="w-[589px] relative max-h-full object-cover max-w-full mq1225:flex-1"
          loading="eager"
          alt=""
          src="/rectangle-1@2x.png"
        />
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-center py-[100px] px-5 box-border [row-gap:20px] max-w-full text-left text-13xl text-darkslategray-100 font-italiana mq750:pt-[65px] mq750:pb-[65px] mq750:box-border mq1225:flex-wrap mq1225:justify-center">
        <div className="w-[651px] flex flex-col items-start justify-start min-w-[651px] max-w-full mq750:min-w-full mq1225:flex-1">
          <div className="self-stretch box-border flex flex-col items-center justify-start p-2.5 gap-[36px] max-w-full border-l-[2px] border-solid border-darkslategray-100 mq750:gap-[18px]">
            <h1 className="m-0 w-[551px] relative text-inherit font-normal font-inherit inline-block max-w-full mq750:text-7xl mq450:text-lgi">
              Expert Plant Maintenance Services
            </h1>
            <div className="w-[551px] h-[81px] relative text-xl font-manrope inline-block max-w-full mq450:text-base">
              Our team of experienced professionals provides top-notch plant
              maintenance services, ensuring that your office plants and garden
              thrive all year round.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start p-2.5 box-border gap-[36px] max-w-full mq750:gap-[18px]">
            <h1 className="m-0 w-[551px] h-[38px] relative text-inherit font-normal font-inherit inline-block max-w-full mq750:text-7xl mq450:text-lgi">
              Professional Installation Services
            </h1>
            <div className="w-[551px] h-[81px] relative text-xl font-manrope inline-block max-w-full mq450:text-base">
              We offer professional installation services to help you transform
              your space with beautiful plants and create a welcoming
              environment.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start p-2.5 box-border gap-[36px] max-w-full mq750:gap-[18px]">
            <h1 className="m-0 w-[551px] relative text-inherit font-normal font-inherit inline-block max-w-full mq750:text-7xl mq450:text-lgi">
              Customized Garden Design
            </h1>
            <div className="w-[551px] h-[81px] relative text-xl font-manrope inline-block max-w-full mq450:text-base">
              Our team of skilled designers will work closely with you to create
              a customized garden design that perfectly suits your preferences
              and complements your space.
            </div>
          </div>
        </div>
        <img
          className="w-[589px] relative max-h-full object-cover max-w-full mq1225:flex-1"
          alt=""
          src="/rectangle-1-1@2x.png"
        />
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-28 px-5 box-border gap-[80px] max-w-full text-left text-base text-black font-italiana mq750:gap-[40px] mq750:pt-[47px] mq750:pb-[47px] mq750:box-border mq450:gap-[20px] mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border">
        <div className="w-[1240px] flex flex-row items-end justify-between gap-[20px] max-w-full mq1050:flex-wrap mq1050:justify-center">
          <div className="w-[768px] flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="relative leading-[150%]">Discover</div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-29xl">
              <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-normal font-inherit mq750:text-19xl mq750:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                Featured
              </h1>
              <div className="self-stretch relative text-lg leading-[150%] font-manrope">
                Explore our selection of best-selling plants, new arrivals, and
                seasonal offers.
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-3 px-[21px] bg-[transparent] w-[104px] box-border flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
            <div className="relative text-base leading-[150%] font-manrope text-black text-left">
              View all
            </div>
          </button>
        </div>
        <div className="w-[1240px] overflow-hidden flex flex-col items-start justify-start gap-[48px] max-w-full text-lg mq750:gap-[24px]">
          <div className="self-stretch h-[424px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-[106%] shrink-0 mq750:gap-[32px] mq450:gap-[16px]">
              <div className="self-stretch w-[1312px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
                <div className="self-stretch w-[304px] shrink-0 flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="eager"
                    alt=""
                    src="/placeholder--image@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="w-[304px] relative leading-[150%] inline-block">
                        Monstera Deliciosa
                      </div>
                      <div className="w-[304px] relative text-sm leading-[150%] font-manrope inline-block">
                        Large
                      </div>
                    </div>
                    <div className="relative text-xl leading-[150%] font-kyivtype-sans whitespace-nowrap mq450:text-base mq450:leading-[24px]">
                      $55
                    </div>
                  </div>
                  <button className="cursor-pointer py-2 px-5 bg-[transparent] self-stretch flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
                    <div className="relative text-base leading-[150%] font-text-regular-normal text-black text-left">
                      Add to cart
                    </div>
                  </button>
                </div>
                <div className="self-stretch w-[304px] shrink-0 flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder--image-1@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="w-[304px] relative leading-[150%] inline-block">
                        Fiddle Leaf Fig
                      </div>
                      <div className="w-[304px] relative text-sm leading-[150%] font-manrope inline-block">
                        Medium
                      </div>
                    </div>
                    <div className="relative text-xl leading-[150%] font-kyivtype-sans whitespace-nowrap mq450:text-base mq450:leading-[24px]">
                      $55
                    </div>
                  </div>
                  <button className="cursor-pointer py-2 px-5 bg-[transparent] self-stretch flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
                    <div className="relative text-base leading-[150%] font-text-regular-normal text-black text-left">
                      Add to cart
                    </div>
                  </button>
                </div>
                <div className="self-stretch w-[304px] shrink-0 flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder--image@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="w-[304px] relative leading-[150%] inline-block">
                        Snake Plant
                      </div>
                      <div className="w-[304px] relative text-sm leading-[150%] font-manrope inline-block">
                        Small
                      </div>
                    </div>
                    <div className="relative text-xl leading-[150%] font-kyivtype-sans whitespace-nowrap mq450:text-base mq450:leading-[24px]">
                      $55
                    </div>
                  </div>
                  <button className="cursor-pointer py-2 px-5 bg-[transparent] self-stretch flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
                    <div className="relative text-base leading-[150%] font-text-regular-normal text-black text-left">
                      Add to cart
                    </div>
                  </button>
                </div>
                <div className="self-stretch w-[304px] shrink-0 flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder--image@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="w-[304px] relative leading-[150%] inline-block">
                        Peace Lily
                      </div>
                      <div className="w-[304px] relative text-sm leading-[150%] font-manrope inline-block">
                        Small
                      </div>
                    </div>
                    <div className="relative text-xl leading-[150%] font-kyivtype-sans whitespace-nowrap mq450:text-base mq450:leading-[24px]">
                      $55
                    </div>
                  </div>
                  <button className="cursor-pointer py-2 px-5 bg-[transparent] self-stretch flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
                    <div className="relative text-base leading-[150%] font-text-regular-normal text-black text-left">
                      Add to cart
                    </div>
                  </button>
                </div>
                <div className="self-stretch w-[304px] shrink-0 flex flex-col items-start justify-start gap-[16px]">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/placeholder--image@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="w-[304px] relative leading-[150%] inline-block">
                        Product name
                      </div>
                      <div className="w-[304px] relative text-sm leading-[150%] font-manrope inline-block">
                        Variant
                      </div>
                    </div>
                    <div className="relative text-xl leading-[150%] font-semibold font-text-regular-normal whitespace-nowrap mq450:text-base mq450:leading-[24px]">
                      $55
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center py-2 px-5 text-base font-text-regular-normal border-[1px] border-solid border-black">
                    <div className="relative leading-[150%]">Add to cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="h-2 w-2 relative rounded-[50%] bg-black" />
              <div className="h-2 w-2 relative rounded-[50%] bg-gray" />
              <div className="h-2 w-2 relative rounded-[50%] bg-gray" />
              <div className="h-2 w-2 relative rounded-[50%] bg-gray" />
              <div className="h-2 w-2 relative rounded-[50%] bg-gray" />
            </div>
            <div className="flex flex-row items-start justify-start gap-[15px]">
              <button className="cursor-pointer py-3 px-[11px] bg-[transparent] h-12 w-12 rounded-31xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-black">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
              </button>
              <button className="cursor-pointer py-3 px-[11px] bg-[transparent] h-12 w-12 rounded-31xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-black">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-1.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-28 px-5 box-border gap-[80px] max-w-full text-left text-29xl text-black font-italiana mq750:gap-[40px] mq750:pt-[73px] mq750:pb-[73px] mq750:box-border mq450:gap-[20px]">
        <div className="w-[1240px] flex flex-row items-start justify-start max-w-full">
          <div className="w-[560px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-normal font-inherit mq750:text-19xl mq750:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Happy Customers
            </h1>
            <div className="self-stretch relative text-lg leading-[150%]">
              Hear what our customers have to say about us
            </div>
          </div>
        </div>
        <div className="w-[1240px] overflow-hidden flex flex-row flex-wrap items-start justify-start gap-[64px] max-w-full text-xl font-manrope mq750:gap-[32px] mq450:gap-[16px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[335px] max-w-full shrink-0 mq750:gap-[16px]">
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[4px]">
              <img
                className="h-[18.9px] w-5 relative min-h-[19px]"
                loading="eager"
                alt=""
                src="/vector.svg"
              />
              <img
                className="h-[18.9px] w-5 relative min-h-[19px]"
                alt=""
                src="/vector-1.svg"
              />
              <img
                className="h-[18.9px] w-5 relative min-h-[19px]"
                alt=""
                src="/vector-2.svg"
              />
              <img
                className="h-[18.9px] w-5 relative min-h-[19px]"
                alt=""
                src="/vector-2.svg"
              />
              <img
                className="h-[18.9px] w-5 relative min-h-[19px]"
                alt=""
                src="/vector-4.svg"
              />
            </div>
            <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
              Our office plants have transformed our workspace. They bring a
              sense of calm and beauty to our environment.
            </b>
            <div className="flex flex-row items-center justify-start gap-[20px] max-w-full text-base font-text-regular-normal mq450:flex-wrap">
              <img
                className="h-14 w-14 relative rounded-[50%] object-cover"
                loading="eager"
                alt=""
                src="/avatar-image@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[150%] font-semibold">
                  Fullhar g
                </div>
                <div className="relative leading-[150%]">
                  Position, Company name
                </div>
              </div>
              <div className="h-[62px] w-px relative box-border border-r-[1px] border-solid border-black mq450:w-full mq450:h-px mq450:box-border mq450:border-t-[1px] mq450:border-solid mq450:border-black" />
              <img
                className="h-12 w-[120px] relative overflow-hidden shrink-0"
                loading="eager"
                alt=""
                src="/webflow--black.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[335px] max-w-full shrink-0 mq750:gap-[16px]">
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[4px]">
              <img
                className="h-[18.9px] w-5 relative min-h-[19px]"
                alt=""
                src="/vector.svg"
              />
              <img
                className="h-[18.9px] w-5 relative min-h-[19px]"
                alt=""
                src="/vector-6.svg"
              />
              <img
                className="h-[18.9px] w-5 relative min-h-[19px]"
                alt=""
                src="/vector-7.svg"
              />
              <img
                className="h-[18.9px] w-5 relative min-h-[19px]"
                alt=""
                src="/vector-8.svg"
              />
              <img
                className="h-[18.9px] w-5 relative min-h-[19px]"
                alt=""
                src="/vector-9.svg"
              />
            </div>
            <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
              The garden home website has helped me create a beautiful garden in
              my backyard. I love the variety of plants they offer.
            </b>
            <div className="flex flex-row items-center justify-start gap-[20px] max-w-full text-base font-text-regular-normal mq750:flex-wrap">
              <img
                className="h-14 w-14 relative rounded-[50%] object-cover"
                alt=""
                src="/avatar-image@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[150%] font-semibold">
                  lily diane
                </div>
                <div className="relative leading-[150%] z-[1]">
                  Gardening Enthusiast, Green Thumb
                </div>
              </div>
              <div className="h-[62px] w-px relative box-border border-r-[1px] border-solid border-black mq750:w-full mq750:h-px mq750:box-border mq750:border-t-[1px] mq750:border-solid mq750:border-black" />
              <img
                className="h-12 w-[120px] relative overflow-hidden shrink-0"
                alt=""
                src="/webflow--black-1.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border max-w-full text-center text-29xl text-black font-text-regular-normal mq750:pt-[47px] mq750:pb-[47px] mq750:box-border mq450:gap-[20px] mq1050:gap-[40px] mq1050:pl-8 mq1050:pr-8 mq1050:box-border mq1225:pt-[73px] mq1225:pb-[73px] mq1225:box-border">
        <div className="w-[768px] flex flex-col items-center justify-start gap-[80px] max-w-full mq750:gap-[40px] mq450:gap-[20px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq750:text-19xl mq750:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Frequently Asked Questions
            </h1>
            <div className="self-stretch relative text-lg leading-[150%]">
              Find answers to common questions about plant care, ordering, and
              our services.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-lg font-italiana">
            <div className="self-stretch flex flex-col items-center justify-center py-5 px-[23px] relative gap-[30px] border-[1px] border-solid border-black">
              <div className="self-stretch relative leading-[150%]">
                How do I care for my plants?
              </div>
              <div className="self-stretch relative text-base leading-[150%] font-light font-manrope">
                Proper plant care involves watering, providing adequate
                sunlight, and regular fertilization. Our experts can provide
                specific care instructions for each plant.
              </div>
              <img
                className="w-8 h-8 absolute my-0 mx-[!important] top-[calc(50%_-_55.6px)] right-[20px] overflow-hidden shrink-0"
                loading="eager"
                alt=""
                src="/plus.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-center py-5 px-[23px] relative gap-[30px] border-[1px] border-solid border-black">
              <div className="self-stretch relative leading-[150%]">
                How do I place an order?
              </div>
              <div className="self-stretch relative text-base leading-[150%] font-light font-manrope">
                To place an order, simply browse our website, select the plants
                you want, and proceed to checkout. You can also contact our
                customer support for assistance.
              </div>
              <img
                className="w-8 h-8 absolute my-0 mx-[!important] top-[calc(50%_-_55.6px)] right-[20px] overflow-hidden shrink-0"
                alt=""
                src="/plus.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-center py-5 px-[23px] relative gap-[30px] border-[1px] border-solid border-black">
              <div className="self-stretch relative leading-[150%]">
                What services do you offer?
              </div>
              <div className="self-stretch relative text-base leading-[150%] font-light font-manrope">
                We offer a wide range of services including plant delivery,
                plant installation, and plant maintenance. Our team is dedicated
                to creating beautiful and healthy indoor and outdoor spaces.
              </div>
              <img
                className="w-8 h-8 absolute my-0 mx-[!important] top-[calc(50%_-_55.6px)] right-[20px] overflow-hidden shrink-0"
                alt=""
                src="/plus.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-center py-5 px-[23px] relative gap-[30px] border-[1px] border-solid border-black">
              <div className="self-stretch relative leading-[150%]">
                Can I return my plants?
              </div>
              <div className="self-stretch relative text-base leading-[150%] font-light font-manrope">
                Yes, we have a return policy in place. If you are not satisfied
                with your plants, please contact us within 7 days of delivery to
                arrange for a return or exchange.
              </div>
              <img
                className="w-8 h-8 absolute my-0 mx-[!important] top-[calc(50%_-_55.6px)] right-[20px] overflow-hidden shrink-0"
                alt=""
                src="/plus.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-center py-5 px-[23px] relative gap-[30px] border-[1px] border-solid border-black">
              <div className="self-stretch relative leading-[150%]">
                Do you offer plant care tips?
              </div>
              <div className="self-stretch relative text-base leading-[150%] font-light font-manrope">
                Absolutely! We provide plant care tips and advice on our
                website. You can also reach out to our experts for personalized
                recommendations.
              </div>
              <img
                className="w-8 h-8 absolute my-0 mx-[!important] top-[calc(50%_-_55.6px)] right-[20px] overflow-hidden shrink-0"
                alt=""
                src="/plus.svg"
              />
            </div>
          </div>
          <div className="w-[560px] flex flex-col items-center justify-start gap-[24px] max-w-full text-13xl">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq750:text-7xl mq750:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
                Still have a question?
              </h1>
              <div className="self-stretch relative text-lg leading-[150%]">
                Contact us for more information.
              </div>
            </div>
            <button className="cursor-pointer py-3 px-[23px] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
              <div className="relative text-base leading-[150%] font-text-regular-normal text-black text-left">
                Contact
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white overflow-hidden flex flex-col items-start justify-start py-28 px-[100px] box-border gap-[80px] max-w-full text-left text-base text-black font-text-regular-normal mq750:gap-[40px] mq750:py-[47px] mq750:px-[50px] mq750:box-border mq450:gap-[20px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1225:pt-[73px] mq1225:pb-[73px] mq1225:box-border">
        <div className="w-[768px] flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="relative leading-[150%] font-semibold">Greenery</div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-29xl">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq750:text-19xl mq750:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Meet Our Team
            </h1>
            <div className="self-stretch relative text-lg leading-[150%]">
              Get to know the experts behind our company.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[96px] max-w-full text-xl mq750:gap-[48px] mq450:gap-[24px]">
          <div className="w-[1240px] overflow-x-auto flex flex-col items-start justify-start gap-[64px] max-w-full mq750:gap-[32px] mq450:gap-[16px]">
            <div className="w-[1240px] flex flex-row items-start justify-start gap-[64px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
                <img
                  className="w-20 h-20 relative object-cover"
                  alt=""
                  src="/placeholder--image-5@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
                      David Wilson
                    </div>
                    <div className="self-stretch relative text-lg leading-[150%]">
                      Gardening Consultant
                    </div>
                  </div>
                  <div className="self-stretch relative text-base leading-[150%]">
                    Helping clients create and maintain their dream gardens.
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    loading="eager"
                    alt=""
                    src="/icon--linkedin.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    loading="eager"
                    alt=""
                    src="/icon--x.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    loading="eager"
                    alt=""
                    src="/icon--dribble.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
                <img
                  className="w-20 h-20 relative object-cover"
                  alt=""
                  src="/placeholder--image-5@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
                      Jane Smith
                    </div>
                    <div className="self-stretch relative text-lg leading-[150%]">
                      Garden Designer
                    </div>
                  </div>
                  <div className="self-stretch relative text-base leading-[150%]">
                    Passionate about creating beautiful and sustainable outdoor
                    spaces.
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/icon--linkedin.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/icon--x.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/icon--dribble.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[1240px] flex flex-row items-start justify-start gap-[64px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
                <img
                  className="w-20 h-20 relative object-cover"
                  alt=""
                  src="/placeholder--image-5@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
                      Michael Johnson
                    </div>
                    <div className="self-stretch relative text-lg leading-[150%]">
                      Horticulturist
                    </div>
                  </div>
                  <div className="self-stretch relative text-base leading-[150%]">
                    Expert in plant cultivation and propagation techniqu
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/icon--linkedin.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/icon--x.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/icon--dribble.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
                <img
                  className="w-20 h-20 relative object-cover"
                  alt=""
                  src="/placeholder--image-5@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch relative leading-[150%] font-semibold mq450:text-base mq450:leading-[24px]">
                      Sarah Davis
                    </div>
                    <div className="self-stretch relative text-lg leading-[150%]">
                      Landscape Architect
                    </div>
                  </div>
                  <div className="self-stretch relative text-base leading-[150%]">
                    Bringing innovative design concepts to transform outdoor
                    spaces.
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/icon--linkedin.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/icon--x.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/icon--dribble.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[768px] flex flex-col items-start justify-start gap-[24px] max-w-full text-13xl">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq750:text-7xl mq750:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
                We’re hiring!
              </h1>
              <div className="self-stretch relative text-lg leading-[150%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
            </div>
            <button className="cursor-pointer py-3 px-[21px] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-darkslategray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
              <div className="relative text-base leading-[150%] font-text-regular-normal text-black text-left">
                Open positions
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="self-stretch overflow-hidden flex flex-row items-center justify-end bg-[url('/public/contact-modals--3@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-base text-white font-text-regular-normal">
        <div className="w-[640px] bg-darkslategray-100 overflow-hidden shrink-0 flex flex-col items-center justify-start pt-20 px-16 pb-16 box-border relative gap-[24px] mix-blend-hard-light max-w-full mq750:pl-8 mq750:pr-8 mq750:box-border mq450:pt-[34px] mq450:pb-[27px] mq450:box-border mq1050:pt-[52px] mq1050:pb-[42px] mq1050:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] min-h-[125px] text-center text-29xl">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq750:text-19xl mq750:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Contact us
            </h1>
            <div className="self-stretch relative text-lg leading-[150%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative leading-[150%]">Name</div>
            <input
              className="[outline:none] bg-darkslategray-100 self-stretch h-[50px] box-border flex flex-row items-center justify-start p-3 min-w-[250px] border-[1px] border-solid border-white"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative leading-[150%]">Email</div>
              <input
                className="[outline:none] bg-darkslategray-100 self-stretch h-[50px] box-border flex flex-row items-center justify-start p-3 min-w-[250px] border-[1px] border-solid border-white"
                type="text"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative leading-[150%]">
                Message
              </div>
              <div className="self-stretch bg-darkslategray-100 box-border flex flex-col items-center justify-start py-3 px-[11px] relative min-h-[180px] text-neutral-dark-gray border-[1px] border-solid border-white">
                <div className="self-stretch relative leading-[150%]">
                  Type your message...
                </div>
                <img
                  className="w-0.5 h-0.5 absolute my-0 mx-[!important] right-[0px] bottom-[-0.1px] object-contain"
                  alt=""
                  src="/empty-line.svg"
                />
                <img
                  className="w-1.5 h-1.5 absolute my-0 mx-[!important] right-[0px] bottom-[0.1px] object-contain z-[1]"
                  alt=""
                  src="/label.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-end justify-start pt-0 px-0 pb-4 gap-[12px] text-sm">
              <input
                className="m-0 h-5 w-5 relative box-border overflow-hidden shrink-0 border-[1px] border-solid border-white"
                type="checkbox"
              />
              <div className="relative leading-[150%]">
                {`I accept the `}
                <span className="[text-decoration:underline]">Terms</span>
              </div>
            </div>
            <button className="cursor-pointer p-3 bg-white w-[101px] box-border flex flex-row items-center justify-center border-[1px] border-solid border-white hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <div className="relative text-base leading-[150%] font-text-regular-normal text-darkslategray-100 text-left">
                Submit
              </div>
            </button>
          </div>
          <img
            className="w-8 h-8 absolute my-0 mx-[!important] top-[16px] right-[16px] overflow-hidden shrink-0"
            alt=""
            src="/icon-2.svg"
          />
        </div>
      </section>
    </div>
  );
};

export default TestimonialContainer;
