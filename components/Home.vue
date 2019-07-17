<template>
  
  <div id="home">
    
    <h1 class="ui header" style="font-size: 25px;" v-if="!this.$parent.authenticated">
      Please Login with your NITRO account to see the full page
    </h1>
    <div v-if="!this.$parent.authenticated">
      <router-link
        id="login-button"
        class="ui primary button"
        role="button"
        to="/login"
      >
      Login
      </router-link>
    </div>

    <div v-if="this.$parent.authenticated" style="color: #2c3e50;font-family: sans-serif;">
      <p style="font-size: 1.5rem;">Welcome back, {{claims.name}}!</p>
    </div>
  
    <div style="border: 15px solid #bdc3c7;padding: 15px;font-family: source sans pro;max-width: 700px;width: 100%;margin: 20px auto;font-family: source sans pro;">
      <div class="post" style="margin-bottom: 20px;">
        <div class="date" style="text-transform: uppercase;color: #3498db;letter-spacing: 0.2rem;">
          June 6th 2019
        </div>

        <img src="https://us.123rf.com/450wm/scyther5/scyther51703/scyther5170300058/73650702-cooking-food-kitchen-cutting-cook-hands-man-male-knife-preparation-fresh-preparing-hand-table-salad-.jpg?ver=6" 
          style="width:100%;margin-top: 10px;opacity: 1;display: block;height: auto;transition: .5s ease;backface-visibility: hidden;"> 

        <h2 style="color: #2c3e50;font-size: 2.0rem">
          5 Life-changing Diet Tips
        </h2>
        <div v-if="this.$parent.authenticated">
          <p v-for="p in blog1" 
            :key="p.text"
            :style="p.style"
            >
            {{p.text}}
          </p>
          <p style="font-weight: bold; font-size: 1.2rem;color: #3498db;text-transform: uppercase;margin-top: 20px;">
            Comments:
          </p>
          <input type="text" name="comment-section" style="width: 100%; height: 100px;">
        </div>
      
        <hr style="border: 0;height: 1px;background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));margin-top: 20px;">
      </div>

      <div class="post" style="margin-bottom: 20px;">
        <div class="date" style="text-transform: uppercase;color: #3498db;letter-spacing: 0.2rem;">
          June 5th 2019
        </div>
        <img src="https://ak1.picdn.net/shutterstock/videos/32375701/thumb/6.jpg" 
          style="width:100%;margin-top: 10px;opacity: 1;display: block;height: auto;transition: .5s ease;backface-visibility: hidden;"> 
        <h2 style="color: #2c3e50;font-size: 2.0rem">
          Keto made me a better programmer. No really!
        </h2>
        <div v-if="this.$parent.authenticated">
          <p v-for="p in blog2" 
            :key="p.text"
            :style="p.style"
            >
            {{p.text}}
            <img v-if="p.img" :src="p.img" style="width: 100%;">
          </p>
          <p style="font-weight: bold; font-size: 1.2rem;color: #3498db;text-transform: uppercase;margin">
          Comments:
          </p>
          <input type="text" name="comment-section" style="width: 100%; height: 100px;">
        </div>

        <hr style="border: 0;height: 1px;background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));margin-top: 20px;">
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data: function () {
    return {
      claims: '',
      blog1: [
        {text: 'Maintaining a healthy diet doesn’t necessarily require giving up on taste', style: 'border-left: 5px solid #bdc3c7;padding-left: 5px;'},
        {text: 'In fact, with a few common sense knowledge, you can create a healthy yet enjoyable relationship with food and eating that can last a lifetime.', style: ''},
        {text: 'Here are five easy tips to get (and keep!) you on-track.', style: ''},
        {text: '1. Eat a variety of food', style: 'font-size: 1.5rem; font-weight: bold;'},
        {text: 'Our bodies are incredibly complex, and (with the exception of breast milk for babies) no single food contains all the nutrients we need for them to work at their best. Our diets must therefore contain a wide variety of fresh and nutritious foods to keep us going strong.', style: ''},
        {text: '2. Cut back on salt', style: "font-size: 1.5rem; font-weight: bold;"},
        {text: 'Too much salt can raise blood pressure, which is a leading risk factor for heart disease and stroke. Most people around the world eat too much salt: on average, we consume double the WHO recommended limit of 5 grams (equivalent to a teaspoon) a day.', style: ''},
        {text: 'Even if we don’t add extra salt in our food, we should be aware that it is commonly put in processed foods or drinks, and often in high amounts.', style: ''},
        {text: '3. Reduce use of certain fats and oil', style: 'font-size: 1.5rem; font-weight: bold;'},
        {text: 'We all need some fat in our diet, but eating too much – especially the wrong kinds - increases risks of obesity, heart disease and stroke.  Industrially-produced trans fats are the most hazardous for health. A diet high in this kind of fat has been found to raise risk of heart disease by nearly 30%.', style: ''},
        {text: '4. Limit sugar intake', style: 'font-size: 1.5rem; font-weight: bold;'},
        {text: 'Too much sugar is not only bad for our teeth, but increases the risk of unhealthy weight gain and obesity, which can lead to serious, chronic health problems.', style: ''},
        {text: 'As with salt, it’s important to take note of the amount of “hidden” sugars that can be in processed food and drinks. For example, a single can of soda can contain up to 10 teaspoons of added sugar!', style: ''},
        {text: '5. Avoid hazardous and harmful alcohol use', style: 'font-size: 1.5rem; font-weight: bold;'},
        {text: 'Alcohol is not a part of a healthy diet, but in many cultures New Year’s celebrations are associated with heavy alcohol consumption. Overall, drinking too much, or too often, increases your immediate risk of injury, as well as causing longer-term effects like liver damage, cancer, heart disease and mental illness.', style: ''},
        {text: 'WHO advises that there is no safe level of alcohol consumption; and for many people even low levels of alcohol use can still be associated with significant health risks.', style: ''},
      ],
      blog2: [
        {text: 'If you’ve ever done a NITRO online program, you know the 7 color-coded keto hacks are #LIFE.', style: 'border-left: 5px solid #bdc3c7;padding-left: 5px;'},
        {text: 'And by now, you’ve probably heard about the new Ultimate Keto Hack* nutrition program thats turning regular Joes into super-coders.', style: ''},
        {text: 'But you’re probably asking, “What’s the difference between regular Keto and Ultimate Keto Hack?"', style: ''}, 
        {text: 'Ultimate Keto Hack is the gateway to the 4-hour body; plus 30-day nutrition program with ultra quick diet hacks, meal preps, tracking tools, thousands of code tricks, and more.', style: ''},
        {text: 'Think of it like this: Ultimate Keto Hack takes body hacking to another level with a billion nutrition hacks, a zillion support tools, and a gazillion options.', style: ''},
        {text: 'Our body hackers have refined and clarified the portiion hack* approach to teach you and your family — including your kids! — how to hack your way to delicious, healthy portions for good.', style: ''},
        {text: 'Check out this handy chart below for a quick comparison:', style: ''},
        {text: '', img: 'https://media.istockphoto.com/videos/keto-diet-stop-motion-video-id938317614?s=640x640', style: ''},
        {text: 'And that’s just the beginning — you can read more about everything you get with the Ultimate Keto Hack here, here and here!', style: ''},
        {text: 'Bottom line: Ultimate Keto Hack is a nutrition program that can help you hack into a deeper understanding of nutrition and what it means to heack healtily.', style: ''},
        {text: 'With the information, strategies, and mind Jujitsu hacks that Ultimate Keto Hack provides, you’ll be able to hack code like never before.', style: ''}
      ]
    }
  },
  created () { this.setup() },
  methods: {
    async setup () {
      this.claims = await this.$auth.getUser()
    }
  }
}
</script>




