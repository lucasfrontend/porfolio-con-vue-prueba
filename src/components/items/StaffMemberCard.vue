<template>
    <div class="member-details">
        <div>
        <img src="https://i.postimg.cc/zG5c7T02/168-1685371-corporate-headshot-pic-png-transparent-png.png" alt="UI Designer">
        <div class="member-info">
            <h3>Jennifer Tilly</h3>
            <p>UI Designer</p>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StaffMemberCard',
    props: {

    }
}

</script>

<style lang="scss" scoped>

.member-details {
  > div {
    background-image: url('../../assets/staff/jaira.jpg');
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
  }
  .jaira{
    background-image: url('../../assets/staff/jaira.jpg');
  }
  .noe{
    background-image: url('../../assets/staff/noe.jpg');
  }
  .richi {
    background-image: url('../../assets/staff/jaira.jpg');
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
</style>