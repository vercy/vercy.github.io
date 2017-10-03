---
title: Vercy's Page
layout: default
---

# Develop for Purpose
###### 2017-10-03, [Medium](https://medium.com/@vercy/develop-for-purpose-66f2c94d0717)

I summarized the outlines of my current thinking about making development decisions on [Medium](https://medium.com/@vercy/develop-for-purpose-66f2c94d0717).

*A cheat list for keeping software development teams focused and motivated on projects with a purpose but without audacity...*



# Moved to GitHub
###### 2017-08-12

Moved the content to GitHub using markdown. New version number: 4.0


# Language study tool
###### 2010-07-20, [download]({{ site.url }}/assets/nLT.zip)

*Create flashcards, lookup Japanese words, reviews decks quickly with nLT*

A long time ago, after starting to learn Japanese I figured flashcards might speed up the process. After taking a look
around and finding no suitable tool I started to write my own...

* Uses yakugo.com to lookup unknown words
* Edit word definitions
* Create/Review decks
* Associate labels to decks to sort them

**Installation**
1. Create a folder for the application e.g.: C:\\nLT\\
2. Extract nLT.exe to the folder
3. Start nLT.exe (downloads missing components)

![nLT screenshot]({{ site.url }}/assets/images/nLT.jpg)



# Klingon Watch screensaver
###### 2009-06-14, [download]({{ site.url }}/assets/Klingon Watch.zip)

After watching the 11th 'Star Trek Movie' I suddenly felt the urge to contribute to the Star Trek scene. I wrote this
application in the hope of being able reduce the gap between humanity and the Klingon culture :) The project turned out
to be a fun way of spending the weekend.

* .NET 3.5 application (not using architecture specific functions)
* Supports screensaver preview
* Supports multi-monitor configurations
* Customizable digits and glow

**Installation**
1. Create a folder for the screen saver e.g.: C:\\Klingon\\
2. Extract the screensaver to the folder
3. Right click the Screensaver file in explorer so as the explorer context menu pops
4. Select the 'Install' menu item from the list

> WARNING: Windows  does not copy files upon the right click install method

![klingon options]({{ site.url }}/assets/images/klingonOptions.png)



# Switch | ÜD
###### 2008-06-12, [download](http://umlaut.hu/release/ud_swtch.zip), [Pouet](http://www.pouet.net/prod.php?which=50921), [Youtube](https://www.youtube.com/watch?v=rzgd0U7iqTk)

A demo made in two days :) I hope you enjoy watching it just as much as we enjoyed making it.
My part was mostly around the Julia fractal. Switch was ranked 3rd in combined demo category.

![Switch Julia fractal]({{ site.url }}/assets/images/switch02.jpg)



# Discreet World
###### 2007-04-15, [download]({{ site.url }}/assets/DiscreetWorld-1.1.jar)

This small-scale simulation program was inspired by the first few chapters of [Artificial Intelligence: A Modern
Approach](http://aima.cs.berkeley.edu/). More specifically the cleaner agent of the vacuum world. My university studies
did not include to much about agents that act on thier own. So I got curious enough to implement a synthetic world and
develop an agent that tries to make it dust-free. I developed a map visualizer sub-system so you can enjoy the result
in real time :) If you are interested in the source code you can find that in the downloadable jar file. The .jar file
can also be run as a standalone application.

*Instructions*
1. First you have to select a map. The agent selector boxes appear. The map defines how many agents can you place on them, so it may vary
2. Select a number of agents
3. Hit the start button
4. You can pause/resume the simulation any time. You can also add or remove agents after stopping the simulation.

**Agents types**
* *Vercy's cleaner agent:* This agent systematically traverses the map looking for dust. After the whole maps has been revised it returns to its start position
* *Dummy agent:* chooses a random action regardless of the sensed data. It was a great help for debugging, and it looks kind of funny



# AuToShutdown, Java based timer
###### 2006-08-12, [download v3.4]({{ site.url }}/assets/AuToShutdown-3.4.zip)

> Requires Windows XP+ 32 bit and Java

*Latest news:* the latest version of autoshutdown brings you hiberbation. This feature enables you to hibernate your
computer (OS support required) at the well known predefined events. There is another improvement worth mentioning here:
the 'Autostart' feature. With this feature you can automatically start your last settings. If you combine this with
the startup functionality of Windows, you can get a nice zombie out of your computer that lets you sleep.

* Autostart latest timer settings
* Hibernation support
* [mplayer](http://mplayerhq.hu) watcher plugin
* System tray support

![Autoshutdown]({{ site.url }}/assets/images/autoshutdown-3.4.jpg)



# Sample Grabber
###### 2005-09-18, [GitHub](https://github.com/vercy/videosamplegrabber)

This library was developed as the part of an emotion recognizer project at the university of Debrecen.
To handle a capture device I got myself familiar with the applicable parts of
the Windows SDK / DirectShow. Since there was no support to invoke
directshow functions from managed code (C#) I also needed a marshall library.
I found an almost suitable library at [codeproject](http://www.codeproject.com),
however the complexity of the problem required me to revise some of the
critical parts of the library. It took a while to circumvent a marshalling
problem that was stated to be impossible by many on MSDN...

Two plugins come with the package. The file based (prFile.dll) plugin and
the general capture device (prGeneralDev.dll) plugin. The file provider can
make use of any file that is renderable with the default graphbuilder. The
general device provider can cope with any kind of camera or tuner. Unfortunately
it cannot deal with devices that require special codecs like some HD cameras do.

Features
* All sample providers are plugins
* Buffered/direct mode. If your device is slow, our your application needs instant reply you can turn on the buffered mode. It keeps a copy of the latest frame accessible to caller processes at any time.
* Runtime statistics
* Asynchronuos preview of the input stream
* Single frame mode/Frame server mode operation. in frame server mode the sampler keeps sending you the images right after your process function has returned.
* Interactive and scripted startup

![video sample grabber]({{ site.url }}/assets/images/grabber.jpg)



# TrendLines stockchart editor
###### 2005-08-17

Trendlines was called to life by a group stockchart traders who wanted to
decorate their stock forecasts at [trendlines](https://www.facebook.com/trendlines/).
It is not in use anymore to my best knowledge. This project was used to
develop and understand the basic blocks of plugin based architectures.

*Input formats*
* Single files containing intra-day data
* Single file containing daily data
* Zipped file containing files with daily data

*Persistent data storage*
* Seamless dataset updates, backup of datasets on update
* Automatic loading/storing
* Progress indications of data operations
* Unlimited stock handling capability

*Chart rendering*
* Japanese candle-stick
* MACD indicator
* RSI indicator
* Volume indicator

*Chart decoration*
* Textual comments
* Trend lines.
* Parallel trend lines.

![Trendlines on windows]({{ site.url }}/assets/images/TrendLines-mainwindow.png)



# Turing machine
###### 2005-03-06, [download]({{ site.url }}/assets/vtm.jar)

I held a demonstration class in algorithm theory at the university of Debrecen in 2004. The course was theoretical
but I built a decided to build an Java applet to help the students verify their ideas.

1. Define the number of the tapes
2. Specify an input string
3. Input the code to execute. Enter one instruction per line!
4. Press the [Run] button

Instruction syntax: `{state} {input}+ -> {state} {output}+ {movements}+`

Example using one tape: `init 1 -> init 1 R`

Example using two tapes: `q1 1 * -> q3 1 1 R R`



# Java Software 3D engine
###### 2004-12-10

I always wanted to write a 3D engine in Java. However there was no real need for
such an engine, so I decided to make a test out of it. I used the simplest/fastest
technologies for the implementation. The whole process took about 6 hours of work.
This also included the implementation of an import parser, that could read 3D Studio's
ase export. After the completion of the engine I wrote an interactive parameterization
UI for the camera.

#### Features
* 3D Studio like camera model
* Interactive model view
* .ase input for loading models
* Flat shaded rendering
* Wireframe rendering
* Backface culling

![Java 3D engine]({{ site.url }}/assets/images/java3d01.jpg)



# Quadtree based image compression utility
###### 2004-12-01

The most basic way to store images is to store each individual pixel's color intensity.
This method is used in the Bitmap (`.bmp`  extension) format. Storing images this way
can take up a tremendous space especially if you have a sequence of images. As you may
already know there are more efficient ways to store images, just think of the other image
extensions (eg: jpg, png). This utility uses a  quad-tree to decrease the stored size of the image.

#### Application
You can also implement compression if you choose not to store color data for the pixels
of the same color. Using this method you won't have a full quadtree, and you have to store
color data at every node (though you hope to have fewer nodes). This way you can store
your image without the loss of any information. You can also choose to have a threshold
for matching the colors of neighboring pixels. This way you can achieve even smaller size,
however you loose information. The importance of the lost information is related to the
threshold. You can achieve even better performance if you use some sort of psycho-visual
model to evaluate the  threshold.

#### Theory
The quad-tree is a tree data structure, where each node can have four subsequent nodes.
The compression is based on the iterative tesselation of the image. You divide each
inhomogeneous area to four smaller areas and assign the new areas to four new nodes
in the tree. The data will be stored at the leaf nodes (each representing a rectangular
area). To setup a full quadtree (a leaf node for each pixel) you need a square shaped
image with the dimensions of the power of two (eg 1024x1024). If you do not want to
restrict the input you can divide every image into smaller subimages (eg: 16x16 pixels)
and apply the quadtree to these subimages. However not every image has a dimension
dividable by a power of two. At the edges you can choose to expand the image dimensions
to be a multiply of the chosen power of two. To avoid extra storage needs you could choose
the color of the expanded area to match the color of the border.

* No support for image dimensions not dividable by 16.
* Adjustable compression threshold. No psycho-visual model.
* Visualizing the difference of the original, and the compressed image
* Visualizing the internals of the quadtree

![quad comparison]({{ site.url }}/assets/images/imgquad02.jpg)



# Global illumination Raytracer
###### 2004-05-01

A few students of the global illumination course could demonstrate their skills
with renders instead of the exam. I also built an engine that was able to render
both global and local illumination. The engine accepted a scene and produced an
image. I also developed a script editor for more sophisticated scene editing.

The global illumination engine is based on the Monte-Carlo integral so it is
painfully slow. After some calculations and experiments I developed a stochastic
rendering technology, where the image is the result of a convergence procedure.
The method uses scan-lines, but in a fashion that gives you a global impression
very soon.

![Raytracer output]({{ site.url }}/assets/images/raytracer05.png)



# Chat server and client
###### 2004-04-24

This task was to write a TCP/IP server in C/C++ that runs under Unix. I designed
a simple communication protocol and started the implementation. As I did not
have a working Linux at home I decided to make the application portable.
Eventually a few #define-s were sufficient. The demonstration of the program
was a successful, however my protocol was hacked :)

* Server: C++, Win32, Linux portable
* Client: Java



# C++ Software 3D engine
###### 2003-02-15

I decided to enter the National Scientific Conference for Students with
a software 3D engine. Thanks to the demoscene I already got in touch with such technologies.
With the extensive help from my friends I started to create my own engine. It helped me a
lot to fully understand the way that linear algebra operates and makes up a complete system.
Some parts  of the engine were based on the 3D engine of the
[You Die](http://umlaut.hu/release/ud_die.zip) demo.

I decided to make the conference presentation with the engine itself so that nobody could
question the existence of the product. To achieve this goal I created a simple script engine
to define slides. The slides were basically  pre-rendered images, but you could place objects
rendered by the engine onto them. The interactivity of the slide player induced new
requirements to the 3D engine. I needed some advanced timing control, so that I could step
forward and backward between slides.

* Render scenes stored in .3ds files
* Load and render texture files
* Animated textures
* Render  wire-frame model
* Render to texture
* Start/Stop/Reset scene timing

![Software3D]({{ site.url }}/assets/images/soft3d03.jpg)



# A C/C++ .3ds loader library rewritten from Pascal
###### 2002-10-20
I ported a .3ds import plug-in for [Ümlaüt Design](http://umlaut.hu/) from Pascal to C++.
The .3ds format is commonly used for exporting from 3D Studio MAX. The C++ loader was a major
improvement over the ASCII Export format that was used thus far. The peculiarity of the project
was that teh internals of the .3ds format were not officially published so we had to rely on
trial-and-error development.

* Language: C++
* Size: 6.7 Kb compiled



# Texture Producer Studio
###### 2002-07-27

As a member of  [Ümlaüt Design](http://umlaut.hu/) I participated
in the development of a few 64k intros. My contribution was the texture editor/generator. The
program lets you interactively create and edit procedural textures.  It tries to mimic the ATG
since the author of that tool published the basics of how to write a procedural texture editor.
TXGen was developed using Visual Studio 6 and MFC.



#### 64k compo
* The executable cannot exceed the size limit of 65536 bytes
* The executable cannot load anything from external datasources (including files, network etc)
* The intro must be able to terminate on demand by pushing the Escape key

64k is quite large if you have efficient algorithms for storing models, textures, music etc...
In most cases you want to use a generator so that  you won't have to directly store flat objects.
Building TXGen took a couple of weeks and its usability has been demonstrated in several
[Ümlaüt Design](http://umlaut.hu/) products such as
[Fläsh](http://www.pouet.net/prod.php?which=7354),
[Skrätzh](http://www.pouet.net/prod.php?which=8900),
[Kräsh](http://www.pouet.net/prod.php?which=10149).

![TXGen]({{ site.url }}/assets/images/txgen02.png)