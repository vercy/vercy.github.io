---
title: Vercy's Page
layout: default
---

# Moved to GitHub
###### 2017-08-12

Moved the content into the cloud. Version 4 of the page using jekyll and markdown.



# Language study tool
###### 2010-07-20, [download](nLT.zip)

Create flashcards, lookup Japanese words, reviews decks quickly with nLT

* "download_name":"nLT.zip",

A long time ago, after starting to learn Japanese I figured flashcards might speed up the process. After taking a look
around and finding no suitable tool I started to write my own...

* <a href=\"content/images/nLT.jpg\" target=\"_blank\"><img src=\"content/images/nLT_thumb.jpg\" alt=\"nLT\" /></a>

* Uses yakugo.com to lookup unknown words
* Edit word definitions
* Create/Review decks
* Assiciate labels to decks to sort them

**Installation**
1. Create a folder for the application e.g.: C:\\nLT\\
2. Extract nLT.exe to the folder
3. Start nLT.exe (downloads missing components)


# Klingon Watch screensaver
###### 2009-06-14, [download](Klingon Watch.zip)

After watching the 11th \'Star Trek Movie\' I suddenly felt the urge to contribute to the Star Trek scene. I wrote this
application in the hope of being able reduce the gap between humanity and the Klingon culture :) The project turned out
to be a fun way of spending the weekend.

* <img src=\"content/images/klingonOptions.png\" />

* .NET 3.5 application (not using architecture specific functions)
* Supports screensaver preview
* Supports multi-monitor configurations
* Customizable digits and glow

</td></tr><tr><td>

**Installation**
1. Create a folder for the screen saver e.g.: C:\\Klingon\\
2. Extract the screensaver to the folder
3. Right click the Screensaver file in explorer so as the explorer context menu pops
4. Select the \'Install\' menu item from the list

> WARNING: Windows  does not copy files upon the right click install method



# Switch | ÜD
###### 2008-06-12, [download](http://pouet.net/prod.php?which=50921)

* "thumb_name":"switch01_thumb_prod.jpg"

A demo made in two days :) I hope you enjoy watching it just as much as we enjoyed making it.
My part was mostly around the Julia fractal. Switch was ranked 3rd in combined demo category.

*Requires Hardware support for Pixel shader 3.0*
* [Youtube](https://www.youtube.com/watch?v=rzgd0U7iqTk)
* [Pouet](http://www.pouet.net/prod.php?which=50921)
* [Download](http://umlaut.hu/release/ud_swtch.zip)

* <a href=\"content/images/switch01.jpg\" target=\"_blank\"><img src=\"content/images/switch01_thumb.jpg\" alt=\"Switch\" /></a>
* <a href=\"content/images/switch02.jpg\" target=\"_blank\"><img src=\"content/images/switch02_thumb.jpg\" alt=\"Switch\" /></a>


# Discreet World
###### 2007-04-15
* "description":"A discreet world simulation for AI agents.",
* "download_name":"DiscreetWorld-1.1.jar",

#### Motivation
This small-scale simulation program was inspired by the first few chapters of [Artificial Intelligence: A Modern
Approach](http://aima.cs.berkeley.edu/). More specifically the cleaner agent of the vacuum world. My university studies
did not include to much about agents that act on thier own. So I got curious enough to implement a synthetic world and
develop an agent that tries to make it dust-free. I developed a map visualizer sub-system so you can enjoy the result
in real time :) If you are interested in the source code you can find that in the downloadable jar file. The .jar file
can also be run as a standalone application.

````
<!--[if !IE]>-->
<object classid=\"java:gui/DiscreetApplet.class\" type=\"application/x-java-applet\"
        archive=\"content/DiscreetWorld-1.1.jar\"
        width=\"400\" height=\"400\" >
        <param name=\"archive\" value=\"content/DiscreetWorld-1.1.jar\" />
<!--<![endif]-->
<object classid=\"clsid:8AD9C840-044E-11D1-B3E9-00805F499D93\"
        height=\"400\" width=\"400\" >
        <param name=\"code\" value=\"gui.DiscreetApplet\" />
        <param name=\"archive\" value=\"content/DiscreetWorld-1.1.jar\" />
</object>
<!--[if !IE]>-->
</object>
<!--<![endif]-->
````

*Instructions*
1. First you have to select a map. The agent selector boxes appear. The map defines how many agents can you place on them, so it may vary
2. Select a number of agents
3. Hit the start button
4. You can pause/resume the simulation any time. You can also add or remove agents after stopping the simulation.

**Agents types**
* *Vercy\'s cleaner agent:* This agent systematically traverses the map looking for dust. After the whole maps has been revised it returns to its start position
* *Dummy agent:* chooses a random action regardless of the sensed data. It was a great help for debugging, and it looks kind of funny



# AuToShutdown, Java based timer
###### 2006-08-12
* "download_name":"AuToShutdown-3.4.zip",
*Latest news:* the latest version of autoshutdown brings you hiberbation. This feature enables you to hibernate your
computer (OS support required) at the well known predefined events. There is another improvement worth mentioning here:
the \'Autostart\' feature. With this feature you can automatically start your last settings. If you combine this with
the startup functionality of Windows, you can get a nice zombie out of your computer that lets you sleep.

* <img src=\"content/images/autoshutdown-3.4.jpg\" alt=\"Autoshutdown in action\" />

---|---
Latest version | 3.4
OS | Windows XP+ (32 bit only)
Platform | [Java VM](http://java.com/)

* Autostart latest timer settings
* Hibernation support
* [mplayer](http://mplayerhq.hu) watcher plugin
* System tray support



# Sample Grabber
###### 2005-09-18
* "thumb_name":"grabber_thumb_prod.jpg"
* TODO: github link

#### History
This library was developed as the part of an emotion recognizer project.
To handle a capture device I got myself familiar with the applicable parts of
the Windows SDK (former DirectShow). Since there is no support to invoke
directshow functions from managed code (C#) I also needed a marshall library.
I found an almost suitable library at [codeproject](http://www.codeproject.com)
, however the complexity of the problem required me to revise some of the
critical parts of the library. It took a while to circumvent a marshalling
problem that was stated to be impossible by many on MSDN...

Two plugins come with the package. The file based (prFile.dll) plugin and
the general capture device (prGeneralDev.dll) plugin. The file provider can
make use of any file that is renderable with the default graphbuilder. The
general device provider can cope with any kind of camera or tuner. Unfortunately
it cannot deal with devices that require special codecs (like some HD cameras do).

Features
* All sample providers are plugins
* Buffered/direct mode. If your device is slow, our your application needs instant reply you can turn on the buffered mode. It keeps a copy of the latest frame accessible to caller processes at any time.
* Runtime statistics
* Asynchronuos preview of the input stream
* Single frame mode/Frame server mode operation. in frame server mode the sampler keeps sending you the images right after your process function has returned.
* Interactive and scripted startup

* <a href=\"content/images/grabber.jpg\" target=\"_blank\"><img src=\"content/images/grabber_thumb.jpg\" alt=\"Raytracer\" /></a>



# TrendLines stockchart editor
###### 2005-08-17
* "thumb_name":"TrendLines-mainwindow_thumb_prod.jpg"

#### Motivation
Trendlines was called to life by a group stockchart traders who wanted to
 decorate their stock forecasts at [www.trendlines.hu](http://www.trendlines.hu).
 It is not in use anymore to my best knowledge. This project was used to
 develop and understand the basic blocks of plugin based architectures.

* <a href=\"content/images/TrendLines-mainwindow.png\" target=\"_blank\"><img src=\"content/images/TrendLines-mainwindow_thumb.jpg\" alt=\"Trendlines windows\" /></a>
* <a href=\"content/images/TrendLines-gtk.png\" target=\"_blank\"><img src=\"content/images/TrendLines-gtk_thumb.jpg\" alt=\"Trendlines linux\" /></a>

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



# Turing machine
###### 2005-03-06
* "download_name":"vtm.jar",
* "thumb_name":""

#### Motivation
I held a practical seminar in algorithm theory at the university in 2004. Although the course was theoretical, I built a
Java applet to help the students verify their ideas. I already wrote a command line Turing-machine, when I was learning
the subject, so it was not very difficult to turn it into an applet.

````
<!--[if !IE]>-->
<object classid=\"java:vtmcore/VTMApplet.class\" type=\"application/x-java-applet\"
        archive=\"content/vtm.jar\"
        width=\"400\" height=\"400\" >
        <param name=\"archive\" value=\"content/vtm.jar\" />
<!--<![endif]-->
<object classid=\"clsid:8AD9C840-044E-11D1-B3E9-00805F499D93\"
        height=\"400\" width=\"400\" >
        <param name=\"code\" value=\"vtmcore.VTMApplet\" />
        <param name=\"archive\" value=\"content/vtm.jar\" />
</object>
<!--[if !IE]>-->
</object>
<!--<![endif]-->
````

#### Manual
The following steps describe the usage of the VTM applet:
1. Define the number of the tapes
2. Specify an input string
3. Input the code to execute. Enter one instruction per line!
4. Press the [Run] button

Instruction syntax:
<tt>{state} {input}+ -> {state} {output}+ {movements}+</tt>
Sample instruction using one tape:
<tt>init 1 -> init 1 R</tt>
Sample instruction using two tapes:
<tt> q1 1 * -> q3 1 1 R R</tt>



# Java 3D engine
###### 2004-12-10
* "thumb_name":"java3d01_thumb_prod.jpg"

#### Motivation
I always wanted to write a 3D engine in Java. However there was no real need for
such an engine, so I decided to make a test out of it. I used the simplest/fastest
technologies for the implementation. The whole process took about 6 hours of work.
This also included the implementation of an import parser, that could read 3D Studio's
ase export. After the completion of the engine I wrote an interactive parameterization
UI for the camera.

* <a href=\"content/images/java3d01.jpg\" target=\"_blank\"><img src=\"content/images/java3d01_thumb.jpg\" alt=\"Raytracer\" /></a>

#### Features
* 3D Studio like camera model
* Interactive model view
* .ase input for loading models
* Flat shaded rendering
* Wireframe rendering
* Backface culling



# Quadtree based image compression utility
###### 2004-12-01
* "thumb_name":"imgquad01_thumb_prod.jpg"

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

#### Features
Subimage generation (16x16 pixels). No support for image dimensions not dividable by 16.
* Adjustable compression achived by thresholding. (No psycho-visual model)
* Visualizing the difference of the original, and the compressed image
* Visualizing the internals of the quadtree

#### Screenshots
* <a href=\"content/images/imgquad01.jpg\" target=\"_blank\"><img src=\"content/images/imgquad01_thumb.jpg\" /></a>
* <a href=\"content/images/imgquad02.jpg\" target=\"_blank\"><img src=\"content/images/imgquad02_thumb.jpg\" /></a>



# Global illumination Raytracer
###### 2004-05-01
* "thumb_name":"raytracer03_thumb_prod.jpg"

#### Motivation
A few students of the global illumination course could demonstrate their skills
with renders instead of the exam. I also built an engine that was able to render
both global and local illumination. The engine accepted a scene and produced an
image. I also developed a script editor for more sophisticated scene editing.

* <a href=\"content/images/raytracer02.png\" target=\"_blank\"><img src=\"content/images/raytracer02_thumb.jpg\" alt=\"Raytracer\" /></a>
* <a href=\"content/images/raytracer03.png\" target=\"_blank\"><img src=\"content/images/raytracer03_thumb.jpg\" alt=\"Raytracer\" /></a>
* <a href=\"content/images/raytracer04.png\" target=\"_blank\"><img src=\"content/images/raytracer04_thumb.jpg\" alt=\"Raytracer\" /></a>
* <a href=\"content/images/raytracer05.png\" target=\"_blank\"><img src=\"content/images/raytracer05_thumb.jpg\" alt=\"Raytracer\" /></a>

#### Global illumination
The global illumination engine is based on the Monte-Carlo integral so it is
painfully slow. After some calculations and experiments I developed a stochastic
rendering technology, where the image is the result of a convergence procedure.
The method uses scan-lines, but in a fashion that gives you a global impression
very soon.



# Chat server and client
###### 2004-04-24
#### Motivation
This task was to write a TCP/IP server in C/C++ that runs under Unix. I designed
a simple communication protocol and started the implementation. As I did not
have a working Linux at home I decided to make the application portable.
Eventually a few #define-s were sufficient. The demonstration of the program
was a successful, however my protocol was hacked :)

* Server: C++, Win32, Linux portable
* Client: Java



# Software 3D
###### 2003-02-15
"thumb_name":"soft3d01_thumb_prod.jpg"
"description":"Based on the experience of the previous year I started to build a software 3D engine.",

#### Motivation
I decided to enter the National Scientific Conference for Students with
a software 3D engine. Thanks to the demoscene I already got in touch with such technologies.
With the extensive help from my friends I started to create my own engine. It helped me a
lot to fully understand the way that linear algebra operates and makes up a complete system.
Some parts  of the engine were based on the 3D engine of the
[You Die](http://umlaut.hu/release/ud_die.zip) demo. However
the [Ümlaüt Design](http://umlaut.intro.hu) product was written in Pascal unlike my
engine which was implemented in C/C++. The key features of the engine were:
* Render scenes stored in .3ds files
* Load and render textures
* Support for animated textures
* Render in wire-frame mode

I decided to make the conference presentation with the engine itself so that nobody could
question the existence of the product. To achieve this goal I created a simple script engine
to define slides. The slides were basically  pre-rendered images, but you could place objects
rendered by the engine onto them. The interactivity of the slide player induced new
requirements to the 3D engine. I needed some advanced timing control, so that I could step
forward and backward between slides. The features of the engine required by the Script engine:

* Render to texture
* Start/Stop/Reset scene timing
* Callbacks for loading external files

I would like to say express my gratitude for the members of the team:
* [Gergely Szelei-Kis (Gargaj | CNS^UD)](http://umlaut.intro.hu/~gargaj/) - code, lots of help<
* [Attila Lukács (Procyon | UD)](http://umlaut.intro.hu/~procyon/) - code, artwork
* [Csilla Szabó](http://maikos.blogspot.com) - mental support, artwork

#### Screenshots
* <a href=\"content/images/soft3d01.jpg\" target=\"_blank\"><img src=\"content/images/soft3d01_thumb.jpg\" alt=\"Software3D\" /></a>
* <a href=\"content/images/soft3d02.jpg\" target=\"_blank\"><img src=\"content/images/soft3d02_thumb.jpg\" alt=\"Software3D\" /></a>
* <a href=\"content/images/soft3d03.jpg\" target=\"_blank\"><img src=\"content/images/soft3d03_thumb.jpg\" alt=\"Software3D\" /></a>



# A C/C++ .3ds loader library rewritten from Pascal
###### 2002-10-20
As a member of [Ümlaüt Design](http://umlaut.hu/) I implemented an import plug-in for the .3ds format.
This format is commonly used for exporting your work from 3D Studio MAX. This loader was a major
improvement over the ASCII Export format. However, the internals of the .3ds format
were not officially published so we had to rely on trial-and-error development. I was given the
PASCAL code base by a friend of ÜD thus this project was mainly rewriting existing code in C++.

* Language: C++
* Size: 6.7 Kb compiled
* What: Read object primitives, Read tracks for transformation, scale, rotation



# Texture Producer Studio
###### 2002-07-27

* "thumb_name":"txgen01_thumb_prod.jpg"
* Part of the K(ü)ty(ü) intro creation toolkit.

#### Motivation
As a member of  [Ümlaüt Design](http://umlaut.hu/) I participated
in the development of a few 64k intros. My contribution was the texture editor/generator. The
program lets you interactively create and edit procedural textures.  It tries to mimic the ATG
since the author of that tool published the basics of how to write a procedural texture editor.
TXGen was developed using Visual Studio 6 and MFC.

#### Screenshots</td>
* <a href=\"content/images/txgen01.png\" target=\"_blank\"><img src=\"content/images/txgen01_thumb.jpg\" alt=\"TXGen\" /></a>
* <a href=\"content/images/txgen02.png\" target=\"_blank\"><img src=\"content/images/txgen02_thumb.jpg\" alt=\"TXGen\" /></a>

#### 64k compo
* The executable cannot exceed the size limit of 65536 bytes
* The executable cannot load anything from external datasources (including files, network etc)
* The intro must be able to terminate on demand by pushing the Escape key

64k is quite large if you have efficient algorithms for storing models, textures, music etc...
In most cases you want to use a generator so that  you won\'t have to directly store flat objects.
Although TXGen was never fully completed its usability has been demonstrated in several
early ÜD products e.g.:
[Fläsh](http://www.pouet.net/prod.php?which=7354),
[Skrätzh](http://www.pouet.net/prod.php?which=8900),
[Kräsh](http://www.pouet.net/prod.php?which=10149).
