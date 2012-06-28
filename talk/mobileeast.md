Welcome! This is my second day in a row here in Cambridge, yesterday I spoke about cloud development and the steps that we've made in the past two years and today is more hands on. We are going to build a mobile application for your phone using only in-browser tooling. Unleash Cloud9, Ripple and PhoneGap Cloud.

[bla bla cloud9]

Apache Cordova, formerly PhoneGap, is a set of tools dedicated to creating stand-alone mobile applications using standard web technology. That also means that there is just one code base but it's still possible to target multiple devices, from iOS to Blackberry and from WebOS to Windows Phone 7. The inner working of PhoneGap is no black magic. It's just a full screen web browser. The great power lays in the ability to talk to phone specific API's that are not exposed in the web browser. That means that your app can access f.e. the accelerometer, something that is not possible from the browser. PhoneGap also gives you complete freedom in choosing the UI library that you'd like to use, today we're going to use jQuery Mobile.

The Ripple emulator is complementary to Cordova. It's an in-browser device emulator that works as a Chrome extension. The cool thing is that both the application you're developing as well as Ripple both use WebKit which results in pretty accurate renderings. Ripple handles stuff that your normal browser won't do, like adapting form factors, handling orientation change and the accelerometer; plus emulating things like your contacts. If you've used any Android emulators you will see the resemblence. As said Ripple is just an application that you can install as a Chrome extension.

So in this session we'll create an application in Cloud9, using Cordova, then test it in Ripple in our own browser and then use PhoneGap Cloud to build the actual application and even test it on your own device. As long as you have an Android or Blackberry device because they don't have to be rooted.

* Open Cloud9, you can log in via GitHub or BitBucket, and we'll autolink all repositories that you have there to your Cloud9 account so you're ready to go in an instant.
* This is your dashboard. On the left you have a list of all workspaces that you have already cloned or created. A workspace is a project with all it's files and a VM attached where you can run all your code on.
* I can clone a repository by selecting the Clone option and pasting the URL of the base repo that we will be using.
* When I open a project I'll end up in the editor. As you can see it's very clean. On the left side you see all your files, and on the right you see the open files.
* Let's create a file (test.rb). Cloud9 can run node.js, Ruby, PHP and Python straight from the IDE. So let's create a simple Ruby file. Type:

    puts 'Hello world'

* When clicking 'Debug' this application will now run on the Cloud9 servers and the output appears in the output window.
* You are not limited in running anything. If you'd like to install Haskell. It's up to you.
* So now open 'index.html'. This is the most basic PhoneGap app that you can have.
* To start this application from Cloud9 we'll hit the 'Preview' button.
* If you don't see the emulator, right click and select 'Emulator' -> 'Enable'.
* So this doesn't do anything, so let's add some basic behavior.
* PhoneGap listens to a `deviceready` event. So we can attach an event handler to that. *show code completion*

    <script>
        document.addEventListener("deviceready", function () {
            $("#hello").click(function () {
                alert("Hello Jan!");
            });
        });
    </script>
    
* And now we have a button that does something, marvelous!
* We can also respond to device specific actions, let's watch the accelerometer (accel.js)
* Now watch this great code outline that we have (CMD+SHIFT+E)!
* Let's first log the information that we retrieve back from the API, we can just use console.log cause Ripple runs in the browser
* 'Preview'
* Open accelerometer thing and move around with Chrome Dev Panel open
* As you can see that that works, now let's create some shake detection
* I have a little script, and on 'start' I'll show an image
* On 'stop' we'll hide the image
* Show it
* Now for the collaborative part, who wants a different picture?
* Log in to Cloud9 with ur github account, and open c9.io/janjongboom/mobileeast
* Grant write access
* Let him change picture
* Show again

So now that is done, we have a small client side application. We are going to hook a server to it. In this case node.js, because it has a module called socket.io that makes it really easy to create socket based communication. So what we need is:

1. A small server where clients push their 'shakin' messages to
2. A small web page that shows how much shakin is going on

To do that we first need socket.io. You can install dependencies from the cloud9 command line. In this case 'npm install socket.io'.

* 
* 
* 
* 
* 