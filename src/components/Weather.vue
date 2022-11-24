<template>
    <div class="weather-container">
        <div class="date">
            <p>{{ today }}</p>
        </div>
        <div class="weather-card">
            <span class="icons">
                <font-awesome-icon icon="fa-solid fa-cloud" />
                <p>{{ clouds }} % </p>
            </span>
            <span class="icons">
                <font-awesome-icon icon="fa-solid fa-wind" />
                <p>{{ wind_speed }}</p>
            </span>
            <span class="icons">
                <font-awesome-icon icon="fa-solid fa-arrow-down" />                
                <p>{{ wind_deg }}</p>
            </span>
            <span class="icons">
                <font-awesome-icon icon="fa-solid fa-temperature-0" />                
                <p>{{ temp }}</p>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    props: {
        clouds: String,
        wind_speed: String,
        wind_deg: String,
        temp: String,
        today: String

    }

}
</script>

<style lang="scss">
.weather-container{
    display:flex;
    justify-content: space-between;
    .date{
        font-size: 0.9rem;
    }
    .weather-card{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        text-decoration: none;
        min-width: 20%;
        font-size: 0.5rem;
        .icons {
            font-size: 1.4rem;
            color: var(--light);
            padding: 5px;
            margin: 0;
            p{
                font-size: 0.9rem;

            }
        }
    }
}
</style>