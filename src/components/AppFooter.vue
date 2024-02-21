<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <footer>
    <div class="footer-container d-flex">
      <div class="footer-box">
        <div class="logo">
          <img src="../assets/construction/images/footer-logo.png" alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          placeat eligendi nihil! Totam officiis, asperiores alias rerum error
          pariatur provident dicta voluptas expedita sint natus.
        </p>
        <div class="btn">LEARN MORE</div>
      </div>
      <div class="footer-box">
        <h6>LATEST TWEETs</h6>
        <div class="logo-fusion-box d-flex">
          <div class="logo-fusion">
            <div>
              <img
                src="../assets/construction/images/3a74ce3d0532b7773b174c45ca3bd05a_normal.png"
              />
            </div>
          </div>
          <div class="text-fusion">
            <div class="twitter">
              <font-awesome-icon icon="fa-brands fa-twitter" />
            </div>
            <p class="fw-bold">Theme Fusion</p>
            <a href="#">@Theme_Fusion</a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab
              delectus odio vel provident impedit nulla dolore, dolores
              similique molestias.
            </p>
            <div class="coupon">
              <img src="../assets/construction/images/En2TRxLW4AEiWUN.jpeg" />
            </div>
            <div>
              <font-awesome-icon icon="fa-regular fa-heart" class="pe-2" />
              <font-awesome-icon
                icon="fa-solid fa-right-from-bracket"
                class="pe-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="footer-box">
        <h6>CONTACT US TODAY</h6>
        <ul>
          <li class="d-flex gap-2">
            <div class="icon-list">
              <font-awesome-icon icon="fa-solid fa-globe" />
            </div>
            <div>
              <p>Corporate Location</p>
              <p>1600 Amphitheatre Parkway</p>
              <p>London WC11BA</p>
            </div>
          </li>
          <li class="d-flex gap-2">
            <div class="icon-list">
              <font-awesome-icon icon="fa-solid fa-house-chimney" />
            </div>
            <div>
              <p>Residential Location</p>
              <p>9521Broadsberry Avenue</p>
              <p>Paddington RC7 9ZA</p>
            </div>
          </li>
          <li class="d-flex gap-2">
            <div class="icon-list">
              <font-awesome-icon icon="fa-solid fa-phone-flip" />
            </div>
            <div>
              <p>1.800.458556 /1.800.532.2112</p>
            </div>
          </li>
          <li class="d-flex gap-2">
            <div class="icon-list">
              <font-awesome-icon icon="fa-regular fa-envelope" />
            </div>
            <div>
              <p>info@your-domain.com</p>
            </div>
          </li>
          <li class="d-flex gap-2">
            <div class="icon-list">
              <font-awesome-icon icon="fa-regular fa-clock" />
            </div>
            <div>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            </div>
          </li>
          <li class="d-flex gap-2">
            <div class="icon-list">
              <font-awesome-icon icon="fa-regular fa-clock" />
            </div>
            <div>
              <p>Saturday - Sunday: 9:00 AM - 12:00 PM</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer-box">
        <h6>FIND US</h6>
        <div class="map">
          <img src="../assets/construction/images/construction_map_pin.png" />
        </div>
      </div>
    </div>
  </footer>
  <div class="footer">
    <div class="info d-flex">
      <p>COPYRIGHT 2012 - 2015 AVADA THEME BY</p>
      <p class="fw-bold">THEME FUSION</p>
      <p>| ALL RIGHT RESERVED |</p>
      <p>POWERED BY</p>
      <p class="fw-bold">WORDPRESS</p>
    </div>
    <div class="icon-box d-flex">
      <font-awesome-icon class="icon-footer" icon="fa-brands fa-facebook" />
      <font-awesome-icon class="icon-footer" icon="fa-brands fa-twitter" />
      <font-awesome-icon class="icon-footer" icon="fa-brands fa-youtube" />
      <font-awesome-icon class="icon-footer" icon="fa-brands fa-instagram" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
footer {
  background-color: #1e1e1e;
  padding: 5rem 8rem;

  .footer-container {
    width: 100%;
    gap: 2rem;

    .footer-box {
      width: calc(100% / 4);

      h6 {
        color: #fed03d;
        font-weight: bolder;
        font-size: 12px;
      }

      p {
        color: #888;
        padding: 1rem 0;
        font-size: 12px;
        line-height: 30px;
      }

      .logo-fusion-box {
        padding-top: 1rem;
        gap: 10px;

        .logo-fusion {
          width: 10%;

          div {
            border-radius: 50%;
            overflow: hidden;

            img {
              width: 100%;
            }
          }
        }
      }

      .text-fusion {
        width: 90%;
        position: relative;

        a {
          font-size: 12px;
          text-decoration: none;
          color: #888;
        }

        p {
          padding: 0;
          line-height: normal;
          margin: 0;
          color: white;
        }

        .twitter {
          position: absolute;
          right: 0;
          top: 0;
          color: #667580;
        }
      }

      .coupon {
        margin-top: 1rem;
        img {
          width: 100%;
        }
      }

      .pe-2 {
        color: #667580;
      }

      ul {
        padding: 0;

        li {
          margin-top: 0.25rem;
        }

        p {
          color: #667580;
          font-size: 10px;
          margin: 0;
          padding: 0;
          line-height: 20px;
        }

        .icon-list {
          color: #667580;
          font-size: 12px;
        }
      }

      .map {
        width: 80%;
        img {
          width: 100%;
        }
      }
    }
  }
  .footer {
    background-color: black;
    height: 60px;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon-box {
      gap: 1rem;
      cursor: pointer;
      .icon-footer {
        color: #888;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .info {
      font-size: 10px;
      color: #888;

      p {
        margin: 0;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
