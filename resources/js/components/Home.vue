<template>
  <div class="homeComponent">
    <navbar></navbar>
    <icon-corner></icon-corner>
    <div class="banner-slide">
      <carousel :perPage="1" :autoplay="false" :loop="true">
        <slide class="slide banner-01">
          <div class="mx-auto">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                </div>
                <div class="col-md-6"></div>
              </div>
            </div>
          </div>
        </slide>
        <slide class="slide banner-02">
            <div class="mx-auto">
              
            </div>
        </slide>
        <slide class="slide banner-03">
            <div class="mx-auto">
            <div class="container">
              
            </div>
            </div>
        </slide>
      </carousel>
    </div>

    <div class="categories">
      <div class="container">
        <div class="row my-4">
          <div class="title-categories">
            <div class="text-left" style="border-left: 3px solid #04a7bb">
              <span class="font-weight-bold text-uppercase mx-3">Top categories</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
              <div class="top-wrapper">
                <div class="banner justify-content-center align-items-center d-flex">
                  <img src="/img/banners/home-img03.png" alt />
                  <div class="p-2 text-category">Road Bikes
                    <div class="subtext-category mt-2 text-left">
                      <div class="ml-5">
                        <div class="p-1"><span class="mr-2"><i class="fas fa-arrow-right"></i></span> road bikes</div>
                        <div class="p-1"><span class="mr-2"><i class="fas fa-arrow-right"></i></span> cyclocross bikes</div>
                        <div class="p-1"><span class="mr-2"><i class="fas fa-arrow-right"></i></span> gravel bikes</div>
                        <div class="p-1"><span class="mr-2"><i class="fas fa-arrow-right"></i></span> triathlon bikes</div>
            <routerLink
              @click.native="getCategory($event)"
              :to="{ name: 'products', params: { product: 'cyclocross', type: 'category' }}"
              class="top-link"
              name="cyclocross"
            >
                        <div class="p-1"><button class="btn btn-outline"><span class="white font-weight-bold text-uppercase">See more <i class="fas fa-angle-double-right"></i></span></button></div>
            </routerLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="col-md-4">
            <routerLink
              @click.native="getCategory($event)"
              :to="{ name: 'products', params: { product: 'mountain', type: 'category' }}"
              class="top-link"
              name="mountain"
            >
              <div class="top-wrapper">
                <div class="banner justify-content-center align-items-center d-flex">
                  <img src="/img/banners/home-img02.png" alt />
                  <div class="p-2 text-category">Mountain Bikes
                    <div class="subtext-category mt-2 text-left">
                      <div class="ml-5">
                        <div class="p-1"><span class="mr-2"><i class="fas fa-arrow-right"></i></span> cross country mountain bikes</div>
                        <div class="p-1"><span class="mr-2"><i class="fas fa-arrow-right"></i></span> trail mountain bikes</div>
                        <div class="p-1"><span class="mr-2"><i class="fas fa-arrow-right"></i></span> downhill mountain bikes</div>
                        <div class="p-1"><span class="mr-2"><i class="fas fa-arrow-right"></i></span> eletric mountain bikes</div>
                        <div class="p-1"><button class="btn btn-outline"><span class="white font-weight-bold text-uppercase">See more <i class="fas fa-angle-double-right"></i></span></button></div>
                      </div>
                      </div>
                    </div>
                </div>
              </div>
            </routerLink>
          </div>
          <div class="col-md-4">
            <routerLink
              @click.native="getCategory($event)"
              :to="{ name: 'products', params: { product: 'comfort', type: 'category' }}"
              class="top-link"
              name="comfort"
            >
              <div class="top-wrapper">
                <div class="banner justify-content-center align-items-center d-flex">
                  <img src="/img/banners/home-img01.png" alt />
                  <div class="p-2 text-category">Comfort Bikes
                    <div class="subtext-category mt-2 text-left">
                      <div class="ml-5">
                        <div class="p-1"><span class="mr-2"><i class="fas fa-arrow-right"></i></span> hybrid bikes</div>
                        <div class="p-1"><span class="mr-2"><i class="fas fa-arrow-right"></i></span> fitness bikes</div>
                        <div class="p-1"><span class="mr-2"><i class="fas fa-arrow-right"></i></span> gravel bikes</div>
                        <div class="p-1"><span class="mr-2"><i class="fas fa-arrow-right"></i></span> eletric bikes</div>
                        <div class="p-1"><button class="btn btn-outline"><span class="white font-weight-bold text-uppercase">See more <i class="fas fa-angle-double-right ml-1"></i></span></button></div>
                      </div>
                    </div>
                    </div>
                </div>
              </div>
            </routerLink>
          </div>
        </div>
      </div>
    </div>

    <div class="banner">
      <div class="container">
        <div class="row my-5 text-left">
          <div class="col-md-6 col-xs-12">
            <div class="banner-wrapper">
                <div class="container">
                  <div class="row p-2">
                    <div class="col-md-8">
                      <div class="mx-auto mt-4">
                        <div class="font-weight-bold text-uppercase">Accessories</div>
                        <div class="font-weight-bold">at Best prices</div>
                      </div>
                    </div>
                    <div class="col-md-4 text-center">
                      <img src="/img/banners/home-img01.png" class="card-img-top" alt />
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="banner-wrapper">
                <div class="container">
                  <div class="row p-2">
                    <div class="col-md-8">
                      <div class="mx-auto mt-4">
                        <div class="font-weight-bold text-uppercase">Accessories</div>
                        <div class="font-weight-bold">at Best prices</div>
                      </div>
                    </div>
                    <div class="col-md-4 text-center">
                      <img src="/img/banners/home-img03.png" class="card-img-top" alt />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="featured">
      <div class="container">
        <div class="row">
          <div class="title-categories">
            <div class="text-left" style="border-left: 3px solid #04a7bb">
              <span class="font-weight-bold text-uppercase mx-3">Featured products</span>
            </div>
          </div>
        </div>
        <productsCategory :category="'tablet'" />
      </div>
    </div>

    <div class="featured">
      <div class="container">
        <div class="row">
          <div class="title-categories">
            <div class="text-left" style="border-left: 3px solid #04a7bb">
              <span class="font-weight-bold text-uppercase mx-3">Mountain Bikes</span>
            </div>
          </div>
        </div>
        <productsCategory :category="'mountain'" />
      </div>
    </div>

    <div class="featured">
      <div class="container">
        <div class="row">
          <div class="title-categories">
            <div class="text-left" style="border-left: 3px solid #04a7bb">
              <span class="font-weight-bold text-uppercase mx-3">Cyclocross Bikes</span>
            </div>
          </div>
        </div>
        <productsCategory :category="'cyclocross'" />
      </div>
    </div>

    <div class="newest py-5">
      <div class="container">
        <div class="row">
          <div class="title-categories">
            <div class="text-left" style="border-left: 3px solid #04a7bb">
              <span class="font-weight-bold text-uppercase mx-3">New products</span>
            </div>
          </div>
        </div>
        <newProducts />
      </div>
    </div>
    <miniCart />
    <miniList />
    <compareList />
    <section class="service-section" id="services">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="service-items">
              <div class="icon">
                <span class="fas fa-money-check-alt" aria-hidden="true"></span>
              </div>
              <h4>Safe payment</h4>
              <p>Rather than coding from scratch, Bootstrap enables you to utilize ready made blocks of code to help you get started.</p>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="service-items">
              <div class="icon">
                <span class="fas fa-user" aria-hidden="true"></span>
              </div>
              <h4>24/7 Help Center</h4>
              <p>Creating mobile ready websites is a breeze with Bootstrap thanks to the fluid grid layout that dynamically adjusts to the proper screen resolution.</p>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="service-items">
              <div class="icon">
                <span class="fas fa-exchange-alt" aria-hidden="true"></span>
              </div>
              <h4>Free {{"&"}} Easy Return</h4>
              <p>Bootstrap ensures consistency regardless of who’s working on the project.</p>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="service-items">
              <div class="icon">
                <span class="fas fa-star" aria-hidden="true"></span>
              </div>
              <h4>Great Value</h4>
              <p>Bootstrap can be tailor made according to the specifications of your project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-component></footer-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: '',
      type: '',
      newProducts: {},
      slickOptions: {
        slidesToShow: 1
        // Any other options that can be got from plugin documentation
      },
      form: new Form({
        id: "",
        name: ""
      })
    };
  },
  methods: {
    getCategory(event) {
      var categ = event.target.name;
      axios
        .get("api/product/category?q=" + categ)
        .then(({ data }) => (this.category = data.data));
    },
    loadNewProducts() {
      axios
        .get("api/lastProducts")
        .then(({ data }) => (this.newProducts = data.data));
    }
  },
  created() {
    this.loadNewProducts();
  }
};
</script>

<style>

.VueCarousel-dot.VueCarousel-dot--active {
  background-color: #04a7bb !important;
}

.banner-slide .slide {
  height: 450px;
  width: 100%;
  align-items: center;
  display: flex;
}
.banner-slide .banner-01 {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/banners/banner-01.jpg') no-repeat center center;
    background-size: cover;
    color: #fff;
    display: flex;
}

.banner-slide .banner-02 {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/img/banners/banner-02.jpg') no-repeat center center;
    background-size: cover;
    color: #fff;
    display: flex;
}

.banner-slide .banner-03 {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/banners/banner-03.jpg') no-repeat center center;
    background-size: cover;
    color: #fff;
    display: flex;
}
@media (max-width: 767px) {
  
  .banner-slide .banner-01, .banner-slide .banner-02, .banner-slide .banner-03 {
    height: 250px;
  }
  .banner-slide {
    height: 300px;
  }

}
@media (max-width: 390px) {

  .top-wrapper img {
    width: 75%;
  }

}
@media (min-width: 768px) {

  .top-wrapper img {
    width: 90%;
  }

}
@media (min-width: 1200px) {

  .top-wrapper img {
    width: auto;
  }
}

.VueCarousel-navigation-prev {
  font-family: "Font Awesome 5 Free" !important;
  content: ">";
  font-weight: 900;
}

.VueCarousel-navigation-next {
  color: #000;
  font-family: "Font Awesome 5 Free" !important;
  content: "\f054";
  font-weight: 900;
  font-style: normal;
  text-decoration: inherit;
}

.VueCarousel-dot-container {
  margin-top: 0;
}

.banner-wrapper {
  margin-top: 20px;
  background: #eee;
  color: #636b6f;
}
@media only screen and (min-width: 992px) {
  .banner-wrapper img {
    height: 100px;
  }
}

.top-link {
  color: #636b6f;
}
.top-link:hover {
  text-decoration: none;
}
.top-wrapper {
  margin: -5px;
  margin-top: 20px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.top-wrapper .banner {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("/img/banners/simple-background-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 325px;
}
.top-wrapper .text-category, .top-wrapper .text-category .subtext-category {
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
}
.top-wrapper .text-category {
  left: 11px;
  right: 11px;
}
.top-wrapper .text-category .subtext-category {
  font-size: 12px;
  left: 0px;
  right: 0px;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: opacity 300ms, visibility 300ms;
  transition: opacity 300ms, visibility 300ms;
}
.top-wrapper .text-category .subtext-category i {
  color: #17a2b8!important;
}
.top-wrapper .text-category {
  transition: all 0.3s ease-in-out;
}
.top-wrapper:hover .text-category {
  color: #17a2b8!important;
  transform: translateY(-350%);
}
.top-wrapper:hover .subtext-category {
  visibility: visible;
  opacity: 1;
}
.top-icons {
  margin: 25px;
}
.top-icons i {
  font-size: 40px;
  line-height: 1.5;
}

.service-section {
  background: #fff;
}

.service-section h3 {
  font-size: 36px;
  margin-bottom: 30px;
  text-transform: uppercase;
  color: #222;
  letter-spacing: 0.05em;
}

.service-section h3:after {
  content: "";
  display: block;
  width: 80px;
  height: 3px;
  margin: 20px auto 0;
  background: #04a7bb;
}

.service-items {
  margin-top: 20px;
}

.service-items .icon {
  color: #04a7bb;
  font-size: 20px;
  display: block;
  width: 65px;
  height: 65px;
  text-align: center;
  border-radius: 100%;
  border: solid 2px #04a7bb;
  margin: 0 auto 13px;
  line-height: 65px;
}

.service-items h4 {
  font-size: 22px;
  margin-bottom: 20px;
  text-transform: capitalize;
}

.service-items h4 a {
  color: #222;
}

.service-items h4 a:hover {
  color: #f05f40;
}

.service-items p {
  font-size: 16px;
  line-height: 1.6;
  color: #414141;
  margin-bottom: 7px;
}
</style>
