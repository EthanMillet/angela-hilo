<template>
<div :class="$style.frameParent">
<div :class="$style.frameChild" />
<div :class="$style.frameGroup">
<div :class="$style.rectangleParent">
<div :class="$style.frameItem" />
<div :class="$style.frameInner" />
<div :class="$style.rectangleDiv" />
<div :class="$style.rectangleDiv" />
<div :class="$style.rectangleDiv" />
<div :class="$style.rectangleDiv" />
</div>

<b :class="$style.aboutYou">About You</b>
<div :class="$style.frameContainer">
<div :class="$style.doYouHaveFlightExperienceParent">
<div :class="$style.doYouHave">Do you have flight experience?</div>
<div :class="$style.chooseOneParent">
<div :class="$style.doYouHave">Choose one...</div>
<img :class="$style.vectorIcon" alt="" src="./assets/about-you/Vector.svg" />
</div>
</div>
<div :class="$style.doYouHaveFlightExperienceParent">
<div :class="$style.doYouHave">How many hours do you have?</div>
<div :class="$style.typeHoursWrapper">
<div :class="$style.doYouHave">Type hours...</div>
</div>
</div>
</div>
<div :class="$style.whichOfTheseRatingsDoYouParent">
<div :class="$style.doYouHave">Which of these ratings do you have?</div>
<div :class="$style.chooseOneParent">
<div :class="$style.doYouHave">Select all that apply...</div>
<img :class="$style.vectorIcon" alt="" src="./assets/about-you/Vector.svg" />
</div>
</div>
<div :class="$style.whichOfTheseRatingsDoYouParent">
<div :class="$style.doYouHave">What or who inspired you to pursue a career in aviation?</div>
<div :class="$style.typeHoursWrapper">
<div :class="$style.doYouHave">Type your answer...</div>
</div>
</div>
<div :class="$style.whichOfTheseRatingsDoYouParent">
<div :class="$style.doYouHave">How do you handle challenges or setbacks?</div>
<div :class="$style.typeHoursWrapper">
<div :class="$style.doYouHave">Type your answer...</div>
</div>
</div>
<div :class="$style.whichOfTheseRatingsDoYouParent">
<div :class="$style.doYouHave">In what environments do you learn best?</div>
<div :class="$style.chooseOneParent">
<div :class="$style.doYouHave">Select all that apply...</div>
<img :class="$style.vectorIcon" alt="" src="./assets/about-you/Vector.svg" />
</div>
</div>
<div :class="$style.whichOfTheseRatingsDoYouParent">
<div :class="$style.doYouHave">What is one trait you possess that will make you a great pilot?</div>
<div :class="$style.typeHoursWrapper">
<div :class="$style.doYouHave">Type your answer...</div>
</div>
</div>
<div :class="$style.whichOfTheseRatingsDoYouParent">
<div :class="$style.doYouHave">What are your long term goals both within and outside of aviation?</div>
<div :class="$style.typeHoursWrapper">
<div :class="$style.doYouHave">Type your answer...</div>
</div>
</div>
<div :class="$style.whichOfTheseRatingsDoYouParent">
<div :class="$style.doYouHave">What is the highest level of education you have achieved?</div>
<div :class="$style.chooseOneParent">
<div :class="$style.doYouHave">Choose one...</div>
<img :class="$style.vectorIcon" alt="" src="./assets/about-you/Vector.svg" />
</div>
</div>
<div :class="$style.whichOfTheseRatingsDoYouParent">
<div :class="$style.doYouHave">Will you be training part time or full time?</div>
<div :class="$style.chooseOneParent">
<div :class="$style.doYouHave">Choose one...</div>
<img :class="$style.vectorIcon" alt="" src="./assets/about-you/Vector.svg" />
</div>
</div>
<div :class="$style.doYouHave">Provide two references flight schools can contact:</div>
<div :class="$style.reference1Parent">
<div :class="$style.reference1">Reference 1:</div>
<div :class="$style.nameWrapper">
<div :class="$style.doYouHave">Name...</div>
</div>
<div :class="$style.frameParent1">
<div :class="$style.phoneNumberWrapper">
    <div :class="$style.doYouHave">Phone number...</div>
</div>
<div :class="$style.phoneNumberWrapper">
    <div :class="$style.doYouHave">Email...</div>
</div>
</div>
<div :class="$style.relationshipParent">
<div :class="$style.doYouHave">Relationship...</div>
<img :class="$style.vectorIcon" alt="" src="./assets/about-you/Vector.svg" />
</div>
</div>
<div :class="$style.reference1Parent">
<div :class="$style.reference1">Reference 2:</div>
<div :class="$style.nameWrapper">
<div :class="$style.doYouHave">Name...</div>
</div>
<div :class="$style.frameParent1">
<div :class="$style.phoneNumberWrapper">
    <div :class="$style.doYouHave">Phone number...</div>
</div>
<div :class="$style.phoneNumberWrapper">
    <div :class="$style.doYouHave">Email...</div>
</div>
</div>
<div :class="$style.relationshipParent">
<div :class="$style.doYouHave">Relationship...</div>
<img :class="$style.vectorIcon" alt="" src="./assets/about-you/Vector.svg" />
</div>
</div>
<div :class="$style.nextWrapper" @click="onFrameContainerClick">
<b :class="$style.doYouHave">Next</b>
</div>
<div :class="$style.frameChild4" />
</div>
<div :class="$style.frameChild5" />
</div>
</template>


<script>
import { defineComponent } from 'vue'
export default defineComponent({
name: "Frame",
methods: {
    onFrameContainerClick() {
    }}})
</script>
    
<style module scoped>
.frameChild {
    align-self: stretch;
    flex: 1;
    background-color: #f7f9fa;
    z-index: 2;
}
.frameItem {
    flex: 1;
    position: relative;
    border-radius: 100px;
    background-color: rgba(60, 120, 255, 0.25);
    height: 5px;
}
.frameInner {
    flex: 1;
    position: relative;
    border-radius: 100px;
    background-color: #3c78ff;
    height: 5px;
}
.rectangleDiv {
    flex: 1;
    position: relative;
    border-radius: 100px;
    background-color: #f5f5f5;
    height: 5px;
}
.rectangleParent {
    align-self: stretch;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
}
.aboutYou {
    align-self: stretch;
    position: relative;
    font-size: 45px;
}
.doYouHave {
    position: relative;
}
.vectorIcon {
    width: 13.3px;
    position: relative;
    height: 7.7px;
}
.chooseOneParent {
    align-self: stretch;
    border-radius: 10px;
    background-color: rgba(64, 64, 64, 0.05);
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
    color: rgba(64, 64, 64, 0.5);
}
.doYouHaveFlightExperienceParent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
}
.typeHoursWrapper {
    align-self: stretch;
    border-radius: 10px;
    background-color: rgba(64, 64, 64, 0.05);
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    box-sizing: border-box;
    color: rgba(64, 64, 64, 0.5);
}
.frameContainer {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 30px;
}
.whichOfTheseRatingsDoYouParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
}
.reference1 {
    position: relative;
    color: #404040;
}
.nameWrapper {
    align-self: stretch;
    border-radius: 10px;
    background-color: rgba(64, 64, 64, 0.05);
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    box-sizing: border-box;
}
.phoneNumberWrapper {
    flex: 1;
    border-radius: 10px;
    background-color: rgba(64, 64, 64, 0.05);
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    box-sizing: border-box;
}
.frameParent1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
}
.relationshipParent {
    align-self: stretch;
    border-radius: 10px;
    background-color: rgba(64, 64, 64, 0.05);
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
}
.reference1Parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    color: rgba(64, 64, 64, 0.75);
}
.nextWrapper {
    align-self: stretch;
    border-radius: 10px;
    background-color: #3c78ff;
    height: 50px;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    cursor: pointer;
    color: #fff;
}
.frameChild4 {
    width: 100px;
    position: relative;
    background-color: #fff;
    height: 100px;
    overflow: hidden;
    flex-shrink: 0;
}
.frameGroup {
    align-self: stretch;
    width: 900px;
    background-color: #fff;
    overflow-y: auto;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 75px 150px;
    box-sizing: border-box;
    gap: 30px;
    z-index: 1;
}
.frameChild5 {
    align-self: stretch;
    flex: 1;
    background-color: #f7f9fa;
    z-index: 0;
}
.frameParent {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;
    font-size: 18px;
    color: #404040;
    font-family: Helvetica;
}

</style>