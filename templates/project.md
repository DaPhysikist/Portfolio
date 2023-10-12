## Week Zero: Project Inception

This week I came up with the idea for my project after thinking back on an idea I had in the past about traffic collisions. I wanted to use embedded concepts such as wireless communication, RTOS and board/peripheral bring up to familiriaze myself with the skills I need to become an embedded engineer. I also wanted to apply my interest in light and communication-based physics. After some hours thinking and researching existing ideas, I decided what I wanted to do, hoping that my idea was unique.<br/>

My initial research sources:<br/>
[Technical Paper on Bluetooth Direction Finding](https://www.bluetooth.com/bluetooth-resources/bluetooth-direction-finding/)<br/>

I did not have much time this week due to the final for my summer class, but I will resume with my research next week.<br/>

## Week One: Further Research and Initial Material Procurement

### September 12, 2023
This week I began researching additional concepts my project might use, and I came across C-V2X, a standard that is becoming big nowadays for cars (especially autonomous cars) for talking with other cars and infrastructure. This standard is very close to what I had in mind for my project, except that I had been planning to use Bluetooth. My idea might have already been developed by leading companies in this industry, however I still think it would be cool to do. In addition, this is relatively new tech, so there are a lot of oppurtunities to innovate. Here is some of this week's research:<br/>

This page and video by Qualcomm (based right here in San Diego!) was quite interesting:<br/> 
[Qualcomm C-V2X Page](https://www.qualcomm.com/products/automotive/c-v2x)<br/>
[Qualcomm C-V2X Video](https://players.brightcove.net/1414329538001/BJv5wEFt_default/index.html?videoId=6248950719001)<br/>

Also here is a video recently released (exactly one year ago from today!) by Honda on V2X technology they are planning to implement, which is not directly related to my project, but still cool regardless:<br/>
[Honda V2X Video](https://www.youtube.com/watch?v=d17_rVID1fE)<br/>

Another company developing V2X technology who are an inspiration to my project, I found them from Qualcomm's website (they might also be the competition, lol):<br/> 
[Commsignia Website](https://www.commsignia.com/products/rsu/)<br/>

A paper by the National Institute of Health:<br/>
[NIH Paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7865993/)<br/>

This post by Nordic Semiconductor describes the range of BLE 5.x, which should be more than enough to cover the entire width (all lanes) of most highways/freeways/roads:<br/>
[Nordic Post](https://blog.nordicsemi.com/getconnected/things-you-should-know-about-bluetooth-range)<br/>

Looking more at the Bluetooth paper I found last week, what I want to specifically employ is connectionless direction finding using Bluetooth periodic advertising. This will most likely utilize the Angle of Arrival methodology with multiple Bluetooth nodes set up along the side of the road (maybe on at each streetlight) to form a mesh and each one will detect the AoD for more accurate positioning.<br/>

After some more research, I found this video and SDK by Nordic Semiconductor on Bluetooth Direction Finding:<br/>
[Video by Nordic](https://youtube.com/watch?v=AtS6HsrUgZQ&feature=shared)<br/>
[Nordic SDK](https://github.com/nrfconnect/sdk-nrf/tree/main/samples/bluetooth/direction_finding_connectionless_rx)<br/>
[Another Page by Nordic](https://response.nordicsemi.com/the-complete-guide-to-bluetooth-low-energy)