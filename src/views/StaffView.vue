<template>
    <main class="bg">
      <h3 class="pt-4">Staff</h3>
        <section>
          <div class="container">
            <div class="row flex-center sm-no-flex">

              <div class="pull-right sm-no-float col-md-9">
                <ul class="team-members">
                  <!-- single member row starts -->
                  <li class="clearfix">
                    <div class="member-details">
                      <div class="noe">
                        <img src="../assets/none.png" alt="Noe">
                        <div class="member-info">
                          <h3>Noe</h3>
                          <p>Manifest</p>
                        </div>
                      </div>
                    </div>
                    <div class="member-details">
                      <div class="jaira">
                        <img src="../assets/none.png" alt="UI Designer">
                        <div class="member-info">
                          <h3>Jairo</h3>
                          <p>Packer</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="member-details noe">
                      <div class="tano">
                        <img src="../assets/none.png" alt="UI Designer">
                        <div class="member-info">
                          <h3>Tano</h3>
                          <p>Piloto</p>
                        </div>
                      </div>
                    </div>
                  </li><!-- /single member row ends -->
                  
                  <!-- single member row starts -->
                  <li class="clearfix">
                    <div class="member-details">
                      <div class="richi">
                        <img src="../assets/none.png" alt="UI Designer">                        
                        <div class="member-info">
                          <h3>Richard</h3>
                          <p>Tandem - AFF</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="member-details">
                      <div class="chechu">
                        <img src="../assets/none.png" alt="UI Designer">
                        <div class="member-info">
                          <h3>Chechu</h3>
                          <p>Manifest</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="member-details">
                      <div class="ruben">
                        <img src="../assets/none.png" alt="UI Designer">
                        <div class="member-info">
                          <h3>Ruben</h3>
                          <p>Tandem - AFF</p>
                        </div>
                      </div>
                    </div>
                  </li><!-- /single member row ends -->

                  <!-- single member row starts -->
                  <li class="clearfix">
                    <div class="member-details">
                      <div class="fer">
                        <img src="../assets/none.png" alt="UI Designer">
                        <div class="member-info">
                          <h3>Fer</h3>
                          <p>Piloto</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="member-details">
                      <div class="lucho">
                        <img src="../assets/none.png" alt="UI Designer">
                        <div class="member-info">
                          <h3>Lucho</h3>
                          <p>Tandem</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="member-details">
                      <div class="juampi">
                        <img src="../assets/none.png" alt="UI Designer">
                        <div class="member-info">
                          <h3>Juampi</h3>
                          <p>Tandem - AFF</p>
                        </div>
                      </div>
                    </div>
                  </li><!-- /single member row ends -->

                </ul><!-- /end team-photos -->
              </div><!-- /end col-md-8 -->
              
              <div class="pull-left col-md-3 sm-text-center">
                <div class="team-overview">
                  <h4>Quienes somos?</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quae nesciunt officia! Autem, nam eum voluptatem, esse voluptatibus deleniti tempora laboriosam sequi pariatur, explicabo itaque. Fuga, deserunt? Repudiandae, neque qui.</p>
                </div>
              </div><!-- /end col-md-4 -->
            </div><!-- /end row -->
          </div><!-- /end container -->
        </section>
    </main>
  </template>
  
  <script>

import StaffMemberCard from '@/components/items/StaffMemberCard';

  export default {
    name: 'StaffView',
    components: {
      StaffMemberCard
    }
    
  
  }
  </script>
  
  <style lang="scss" scoped>

.bg{
  background-image: url('../assets/bg-1.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  min-height: 100vh;
  min-width: 80%;
  z-index: -10;
}
.team-members {
  transform: rotate(-45deg);

  li {
    list-style:none;
    > div {
      float: left;
      width: 20%;
    }

    &:nth-child(2) > div:first-child {
      margin-left: 20%;
    }

    &:last-child > div:first-child {
      margin-left: 40%;
    }
  }
}

.member-details {
  
  > div {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin: 5px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;


  }
  .jaira{
    background-image: url('../assets/staff/jaira.jpg');
  }
  .noe{
    background-image: url('../assets/staff/noe.jpg');
  }
  .richi {
    background-image: url('../assets/staff/richi.jpg');
  }
  .chechu{
    background-image: url('../assets/staff/chechu.jpg');
  }
  .ruben{
    background-image: url('../assets/staff/ruben.jpg');
  }
  .juampi{
    background-image: url('../assets/staff/juampi.jpg');
  }
  .fer {
    background-image: url('../assets/staff/fer.jpg');

  }
  .lucho {
    background-image: url('../assets/staff/lucho.png');
  }
  .tano {
    background-image: url('../assets/staff/pilot_1.png');
  }


  > div:after {
    content: '';
    background-image: linear-gradient(45deg, rgb(76, 104, 206) 50%, transparent 50%);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
  }
  *, > div:after {
    cursor: pointer;
    transition: all .4s ease;
  }
  
  &:hover {
    *, > div:after {
      opacity: 1;
      visibility: visible;
    }

    .member-info {
      h3 {
        top: 0;
      }

      p {
        bottom: 0;
      }
    }
  }

  img {
    transform: rotate(45deg) translate(0, 15px) scale(1.2);
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}

/* hover content - style */

.member-info {
  position: absolute;
  top: 50%;
  transform: rotate(45deg) translate(-12px, 15px);
  left: 0;
  right: 0;
  z-index: 2;
  text-align: center;
  h3, p {
    margin: 0;
    color: #fff;
    position: relative;
    opacity: 0;
    visibility: hidden;
  }
  h3 {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
    top: -100px;
  }
  p {
    font-weight: 300;
    font-size: 12px;
    bottom: -150px;
  }
}
/* hover content - onhover */

/* Team overview */

.team-overview {
  padding-right: 15px;

  h2 {
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  > a {
    margin-bottom: 30px;
    display: block;

    &:before {
      content: '';
      width: 10px;
      height: 2px;
      position: relative;
      top: -3px;
      margin-right: 5px;
      background-color: #ccc;
      display: inline-block;
    }
  }
  p{
    color: var(--dark);
  }
}

.flex-center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > div:first-child {
    order: 2;
  }
}

/* RESPONSIVE */
@media only screen and (max-width: 992px) {
  .sm-no-flex {
    display: block;
  }

  .sm-no-float {
    float: none !important;
  }

  .sm-text-center {
    text-align: center;
  }
}

@media only screen and (max-width: 550px) {
  .team-members {
    li {
      text-align: center;

      > div {
        float: none;
        display: inline-block;
        width: 30%;
        margin: 0 !important;
      }
    }

    transform: rotate(0);
  }

  .member-details img {
    transform: rotate(0) translate(0, 0);
  }

  .team-overview {
    padding: 15px;
  }
}

@media only screen and (max-width: 399px) {
  .team-members li > div {
    width: 48%;
  }
}

/* extra */

.copyright {
  text-align: center;
  margin-top: 30px;
  font-size: 1.6rem;
  background-color: #ededed;

  a {
    display: inline-block;
    padding: 15px 2px;

    &:not(:last-child):after {
      content: "/";
      margin-left: 10px;
    }
  }
}

.toptal {
  color: #204ecf;
}

.upstack {
  color: #008bf7;
}

.upwork {
  color: #37a000;
}

.fiverr {
  color: #1dbf73;
}

.jobs {
  color: magenta;
  text-decoration: underline;
  margin-top: -15px;
}
//https://res.cloudinary.com/codingsquirrel/image/upload/v1477927345/Blue-polygonal-backgrounds_ijtuux.jpg
  </style>