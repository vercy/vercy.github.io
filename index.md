---
title: Vercy's Page
layout: default
---

### Content adapted to GitHub &mdash; 2017-08-12
Moved the content into the cloud. Version 4 of the page using jekyll and markdown.

### A C/C++ .3ds loader library rewritten from Pascal &mdash; 2002-10-20
As a member of [Ümlaüt Design](http://umlaut.hu/) I implemented an import plug-in for the .3ds format.
This format is commonly used for exporting your work from 3D Studio MAX. This loader was a major
improvement over the ASCII Export format. However, the internals of the .3ds format
were not officially published so we had to rely on trial-and-error development. I was given the
PASCAL code base by a friend of ÜD thus this project was mainly rewriting existing code in C++.

* Language: C++
* Size<: 6,7 Kb, compiled flat
* Features: Read object primitives, Read tracks for transformation, scale, rotation

### Texture Producer Studio &mdash; 2002-07-27

* "thumb_name":"txgen01_thumb_prod.jpg"
* Part of the K(ü)ty(ü) intro creation toolkit.

{"id": 15,"name": "2002.TextureProducerStudio","resource": "<table cellspacing=\"10px\" class=\"spacer\"><tr><td style=\"width: 45%;\">

<table>
<tr><td class=\"labelColumn\">  Motivation</td><td class=\"infoColumn\">As a member of  <a href=\"http://umlaut.hu/\" target=\"_blank\">Ümlaüt Design</a> I participated in the development of a few 64k intros. My contribution was the texture editor/generator. The  program lets you interactively create and edit procedural textures.  It tries to mimic the ATG since the author of that tool published the basics of how to write a procedural texture editor. TXGen was developed using Visual Studio 6 and MFC.</td></tr>
</table>

</td><td style=\"width: 45%;\" rowspan=\"2\">

<table>
<tr><td class=\"labelColumn\">  Screenshots</td><td class=\"infoColumn\"><p align=\"left\">
<a href=\"content/images/txgen01.png\" target=\"_blank\"><img src=\"content/images/txgen01_thumb.jpg\" alt=\"TXGen\" /></a>
<a href=\"content/images/txgen02.png\" target=\"_blank\"><img src=\"content/images/txgen02_thumb.jpg\" alt=\"TXGen\" /></a></p></td></tr>
</table>

</td></tr><tr><td>

<table>
<tr><td class=\"labelColumn\">  64k compo</td><td class=\"infoColumn\">
<ul>
  <li>The executable cannot exceed the size limit of 65536 bytes</li>
  <li>The executable cannot load anything from external datasources (including files, network etc)</li>
  <li>The intro must be able to terminate on demand by pushing the Escape key</li>
</ul>

<p>64k is quite large if you have efficient algorithms for storing models, textures, music etc... In most cases you want to use a generator so that  you won\'t have to directly store flat objects. Although TXGen was never fully completed its usability has been demonstrated in several early ÜD products e.g.:

<a href=\"http://www.pouet.net/prod.php?which=7354\" target=\"_blank\">Fläsh</a>,
<a href=\"http://www.pouet.net/prod.php?which=8900\" target=\"_blank\">Skrätzh</a>,
<a href=\"http://www.pouet.net/prod.php?which=10149\" target=\"_blank\">Kräsh</a>.
</p>
</td></tr>
</table>

</td></tr></table>
"},


   {
      "id":8,
      "name":"Software 3D",
      "description":"Based on the experience of the previous year I started to build a software 3D engine.",
      "release_date":"2003-02-15",
      "resource_name":"2003.Software3D",
      "download_name":"",
      "thumb_name":"soft3d01_thumb_prod.jpg"
   },
 {"id": 17,"name": "2003.Software3D","resource": "<table cellspacing=\"10px\" class=\"spacer\"><tr><td style=\"width: 45%;\" rowspan=\"2\">

<table>
<tr><td class=\"labelColumn\">  Motivation</td><td class=\"infoColumn\">I decided to enter the National Conference for University Students (OTDK in Hungarian) with a software 3D engine. Thanks to the demoscene I already got in touch with such technologies. With the extensive help from my friends I started to create my own engine. It helped me a lot to fully understand the way that linear algebra operates and makes up a complete system. Some parts  of the engine were based on the 3D engine of the <em>You Die</em> demo. However the Ümlaüt Design product was written in Pascal unlike my engine which was implemented in C/C++. The key features of the engine were:

<ul>
  <li>Render scenes stored in .3ds files</li>
  <li>Load and render textures</li>
  <li>Support for animated textures</li>
  <li>Render in wire-frame mode</li>
</ul>

I decided to make the conference presentation with the engine itself so that nobody could question the existence of the product. To achieve this goal I created a simple script engine to define slides. The slides were basically  pre-rendered images, but you could place objects rendered by the engine onto them. The interactivity of the slide player induced new requirements to the 3D engine. I needed some advanced timing control, so that I could step forward and backward between slides. The features of the engine required by the Script engine:

<ul>
  <li>Render to texture</li>
  <li>Start/Stop/Reset scene timing</li>
  <li>Callbacks for loading external files </li>
</ul>

I would like to say thanks for the members of the team:
<ul>
  <li>Gergely Szelei-Kis (Gargaj | CNS^UD) - code, lots of help</li>
  <li>Attila Lukács (Procyon | UD) - code, artwork</li>
  <li>Csilla Szabó (Maiko) - mental support, artwork </li>
</ul>
</td></tr>
</table>

</td><td style=\"width: 45%;\">

<table>
<tr><td class=\"labelColumn\">  Screenshots</td><td class=\"infoColumn\"><p align=\"left\">
<a href=\"content/images/soft3d01.jpg\" target=\"_blank\"><img src=\"content/images/soft3d01_thumb.jpg\" alt=\"Software3D\" /></a>
<a href=\"content/images/soft3d02.jpg\" target=\"_blank\"><img src=\"content/images/soft3d02_thumb.jpg\" alt=\"Software3D\" /></a>
<a href=\"content/images/soft3d03.jpg\" target=\"_blank\"><img src=\"content/images/soft3d03_thumb.jpg\" alt=\"Software3D\" /></a>
</p>
</table>

</td></tr><tr><td>

<table>
<tr><td colspan=\"2\">  Links</td></tr>
<tr><td class=\"labelColumn\">  Ümlaüt Design</td><td class=\"infoColumn\"><a href=\"http://umlaut.intro.hu\" target=\"_blank\">http://umlaut.intro.hu</a></td></tr>
<tr><td class=\"labelColumn\">  You Die</td><td class=\"infoColumn\"><a href=\"http://umlaut.intro.hu/dl.php?prod=9\" target=\"_blank\">http://umlaut.intro.hu/dl.php?prod=9</a></td></tr>
<tr><td class=\"labelColumn\">  Gargaj</td><td class=\"infoColumn\"><a href=\"http://umlaut.intro.hu/~gargaj/\"  target=\"_blank\">http://umlaut.intro.hu/~gargaj</a></td></tr>
<tr><td class=\"labelColumn\">  Procyon</td><td class=\"infoColumn\"><a href=\"http://umlaut.intro.hu/~procyon/\" target=\"_blank\">http://umlaut.intro.hu/~procyon</a></td></tr>
<tr><td class=\"labelColumn\">  Maiko</td><td class=\"infoColumn\"><a href=\"http://maikos.blogspot.com/\" target=\"_blank\">http://maikos.blogspot.com</a></td></tr>
</table>

</td></tr></table>
"},




   {
      "id":11,
      "name":"ImageQuad",
      "description":"Quadtree based image compression utility.",
      "release_date":"2004-12-01",
      "resource_name":"2004.ImageQuad",
      "download_name":"",
      "thumb_name":"imgquad01_thumb_prod.jpg"
   },
{"id": 18,"name": "2004.ImageQuad","resource": "<table cellspacing=\"10px\" class=\"spacer\"><tr><td style=\"width: 45%;\">

<table>
<tr><td class=\"labelColumn\">  Background</td><td class=\"infoColumn\">The most basic way to store images is to store each individual pixel\'s color intensity. This method is used in the Bitmap (\".bmp\"  extension) format. Storing images this way can take up a tremendous space especially if you have a sequence of images (eg: a motion picture). As you may already know there are more efficient ways to store images, just think of the other image extensions (eg: jpg, png). This utility uses a  quad-tree to decrease the stored size of the image.</td></tr>
</table>

</td><td style=\"width: 45%;\" >

<table>
<tr><td class=\"labelColumn\">  Application</td><td class=\"infoColumn\">You can also implement compression if you choose not to store color data for the pixels of the same color. Using this method you won\'t have a full quadtree, and you have to store color data at every node (though you hope to have fewer nodes). This way you can store your image without the loss of any information. You can also choose to have a threshold for matching the colors of neighboring pixels. This way you can achieve even smaller size, however you loose information. The importance of the lost information is related to the threshold. You can achieve even better performance if you use some sort of psycho-visual model to evaluate the  threshold.</td></tr>
</table>

</td></tr><tr><td rowspan=\"2\">

<table>
<tr><td class=\"labelColumn\">  Theory</td><td class=\"infoColumn\">The quad-tree is a tree datastructure, where each node can have four subsequent nodes. The compression is based on the iterative tesselation of the image. You divide each  inhomogeneous area to four smaller areas and assign the new areas to four new nodes in the tree. The data will be stored at the leaf nodes (each representing a rectangular area). To setup a full quadtree (a leaf node for each pixel) you need a square shaped image with the dimensions of the power of two (eg 1024x1024). If you do not want to restrict the input you can divide every image into smaller subimages (eg: 16x16 pixels) and apply the quadtree to these subimages. However not every image has a dimension dividable by a power of two. At the edges you can choose to expand the image dimensions to be a multiply of the chosen power of two. To avoid extra storage needs you could choose the color of the expanded area to match the color of the border.</td></tr>
</table>

</td><td>

<table>
<tr><td class=\"labelColumn\"> Features</td><td class=\"infoColumn\">Subimage generation (16x16 pixels). (No support for image dimensions not dividable by 16)</td></tr>
<tr><td class=\"labelColumn\">  </td><td class=\"infoColumn\">Adjustable compression achived by thresholding. (No psycho-visual model)</td></tr>
<tr><td class=\"labelColumn\">  </td><td class=\"infoColumn\">Visualizing the difference of the original, and the compressed image</td></tr>
<tr><td class=\"labelColumn\">  </td><td class=\"infoColumn\">Visualizing the internals of the quadtree</td></tr>
</table>

</td></tr><tr><td>

<table>
<tr><td class=\"labelColumn\">  Screenshots</td><td class=\"infoColumn\">
<a href=\"content/images/imgquad01.jpg\" target=\"_blank\"><img src=\"content/images/imgquad01_thumb.jpg\" alt=\"Raytracer\" /></a>
<a href=\"content/images/imgquad02.jpg\" target=\"_blank\"><img src=\"content/images/imgquad02_thumb.jpg\" alt=\"Raytracer\" /></a>
</td></tr>
</table>

</td></tr></table>
"},


   {
      "id":12,
      "name":"Java3D",
      "description":"A minimalistic 3D engine, written in Java.",
      "release_date":"2004-12-10",
      "resource_name":"2004.Java3D",
      "download_name":"",
      "thumb_name":"java3d01_thumb_prod.jpg"
   },
 {"id": 19,"name": "2004.Java3D","resource": "<table cellspacing=\"10px\" class=\"spacer\"><tr><td style=\"width: 45%;\">

<table>
<tr><td class=\"labelColumn\">  Motivation</td><td class=\"infoColumn\">I always wanted to write a 3D engine in Java. However there was no real need for such an engine, so I decided to make a test out of it. I used the simplest/fastest technologies for the implementation. The whole process took about 6 hours of work. This also included the implementation of an import parser, that could read 3D Studio\'s ase export. After the completion of the engine I wrote an interactive parameterization UI for the camera.</td></tr>
</table>

</td><td style=\"width: 45%;\" rowspan=\"2\">

<table>
<tr><td class=\"labelColumn\">  Screenshot</td><td class=\"infoColumn\">
<a href=\"content/images/java3d01.jpg\" target=\"_blank\"><img src=\"content/images/java3d01_thumb.jpg\" alt=\"Raytracer\" /></a>
</td></tr>
</table>

</td></tr><tr><td>

<table>
<tr><td class=\"labelColumn\"> Features</td><td class=\"infoColumn\">3D Studio like camera model</td></tr>
<tr><td class=\"labelColumn\">  &nbsp;</td><td class=\"infoColumn\">Interactive model view</td></tr>
<tr><td class=\"labelColumn\">  &nbsp;</td><td class=\"infoColumn\">\'ase\' input for loading models</td></tr>
<tr><td class=\"labelColumn\">  &nbsp;</td><td class=\"infoColumn\">Flatshaded rendering</td></tr>
<tr><td class=\"labelColumn\">  &nbsp;</td><td class=\"infoColumn\">Wireframe rendering</td></tr>
<tr><td class=\"labelColumn\">  &nbsp;</td><td class=\"infoColumn\">Backface culling</td></tr>
</table>

</td></tr></table>


"},




   {
      "id":6,
      "name":"Raytracer",
      "description":"A Java based ray tracer capable of rendering with global illumination.",
      "release_date":"2004-05-01",
      "resource_name":"2004.Raytracer",
      "download_name":"",
      "thumb_name":"raytracer03_thumb_prod.jpg"
   },
{"id": 20,"name": "2004.Raytracer","resource": "<table cellspacing=\"10px\" class=\"spacer\"><tr><td style=\"width: 45%;\">

<table>
<tr><td class=\"labelColumn\">  Motivation</td><td class=\"infoColumn\">A few students of the global illumination course could demonstrate their skills with renders instead of the exam. I also built an engine that was able to render both global and local illumination. The engine accepted a scene and produced an image. I also developed a script editor for more sophisticated scene editing.</td></tr>
</table>

</td><td style=\"width: 45%;\" rowspan=\"2\">

<table>
<tr><td class=\"labelColumn\">  Screenshots</td><td class=\"infoColumn\"><p align=\"left\">
<a href=\"content/images/raytracer02.png\" target=\"_blank\"><img src=\"content/images/raytracer02_thumb.jpg\" alt=\"Raytracer\" /></a>
<a href=\"content/images/raytracer03.png\" target=\"_blank\"><img src=\"content/images/raytracer03_thumb.jpg\" alt=\"Raytracer\" /></a>
<a href=\"content/images/raytracer04.png\" target=\"_blank\"><img src=\"content/images/raytracer04_thumb.jpg\" alt=\"Raytracer\" /></a>
<a href=\"content/images/raytracer05.png\" target=\"_blank\"><img src=\"content/images/raytracer05_thumb.jpg\" alt=\"Raytracer\" /></a>
</p>
</td></tr>
</table>

</td></tr><tr><td>


<table>
<tr><td class=\"labelColumn\">  Global illumination</td><td class=\"infoColumn\">The global illumination engine is based on the Monte-Carlo integral so it is painfully slow. After some calculations and experiments I developed a stochastic rendering technology, where the image is the result of a convergence procedure. The method uses scan-lines, but in a fashion that gives you a global impression very soon.</td></tr>
</table>

</td></tr></table>
"},



   {
      "id":7,
      "name":"Unix chat",
      "description":"Chat server and client suite.",
      "release_date":"2004-04-24",
      "resource_name":"2004.UnixChat",
      "download_name":"",
      "thumb_name":""
   },
{"id": 21,"name": "2004.UnixChat","resource": "<table cellspacing=\"10px\" class=\"spacer\"><tr><td style=\"width: 45%;\">

<table>
<tr><td class=\"labelColumn\">Motivation</td><td class=\"infoColumn\">This task was to write a TCP/IP server in C/C++ that runs under Unix. I designed a simple communication protocol and started the implementation. As I did not have a working Linux at home I decided to make the application portable. Eventually a few #define-s were sufficient. The demonstration of the program was a successful, however my protocol was hacked :)</td></tr>
</table>

</td><td style=\"width: 45%;\" >

<table>
<tr><td colspan=\"2\">Features</td></tr>
<tr><td class=\"labelColumn\">Server</td><td class=\"infoColumn\">C++, Win32, Linux portable<td></tr>
<tr><td class=\"labelColumn\">Client</td><td class=\"infoColumn\">Java<td></tr>
</table>


</td></tr></table>
"},




   {
      "id":15,
      "name":"Sample Grabber",
      "description":"A library that can capture frames from video streams.",
      "release_date":"2005-09-18",
      "resource_name":"2005.SampleGrabber",
      "download_name":"",
      "thumb_name":"grabber_thumb_prod.jpg"
   },
 {"id": 23,"name": "2005.SampleGrabber","resource": "<table cellspacing=\"10px\" class=\"spacer\"><tr><td style=\"width: 45%;\">

<table>
<tr><td class=\"labelColumn\">  History</td><td class=\"infoColumn\">This library was developed as the part of an emotion recognizer project. To handle a capture device I got myself familiar with the applicable parts of the Windows SDK (former DirectShow). Since there is no support to invoke directshow functions from managed code (C#) I also needed a marshall library. I found an almost suitable library at the <a href=\"http://www.codeproject.com\" target=\"_blank\">http://www.codeproject.com</a>
, however the complexity of the problem required me to revise some of the critical parts of the library. It took a while to circumvent a marshalling problem that was stated to be impossible by many on MSDN...</td></tr>
</table>

</td><td style=\"width: 45%;\" >

<table>
<tr><td colspan=\"2\">  </td></tr>
<tr><td class=\"labelColumn\">  Factory plugins</td><td class=\"infoColumn\">Two plugins come with the package. The file based (prFile.dll) plugin and the general capture device (prGeneralDev.dll) plugin. The file provider can make use of any file that is renderable with the default graphbuilder. The general device provider can cope with any kind of camera or tuner. Unfortunately it cannot deal with devices that require special codecs (like some HD cameras do).</</td></tr>
</table>

</td></tr><tr><td>

<table>
<tr><td class=\"labelColumn\">  Features</td><td class=\"infoColumn\">All sample providers are plugins</td></tr>
<tr><td class=\"labelColumn\">  &nbsp;</td><td class=\"infoColumn\">Buffered/direct mode. If your device is slow, our your application needs instant reply you can turn on the buffered mode. It keeps a copy of the latest frame accessible to caller processes at any time.</td></tr>
<tr><td class=\"labelColumn\">  &nbsp;</td><td class=\"infoColumn\">Runtime statistics</td></tr>
<tr><td class=\"labelColumn\">  &nbsp;</td><td class=\"infoColumn\">Asynchronuos preview of the input stream</td></tr>
<tr><td class=\"labelColumn\">  &nbsp;</td><td class=\"infoColumn\">Single frame mode/Frame server mode operation. in frame server mode the sampler keeps sending you the images right after your process function has returned.<</td></tr>
<tr><td class=\"labelColumn\">  &nbsp;</td><td class=\"infoColumn\">Interactive and scripted startup</td></tr>
</table>

</td><td>

<table>
<tr><td class=\"labelColumn\">  Screenshots</td><td class=\"infoColumn\"><p align=\"left\">
<a href=\"content/images/grabber.jpg\" target=\"_blank\"><img src=\"content/images/grabber_thumb.jpg\" alt=\"Raytracer\" /></a>
</p>
</td></tr>
</table>

</td></tr></table>
"},




   {
      "id":17,
      "name":"TrendLines",
      "description":"The stockchart editor",
      "release_date":"2005-08-17",
      "resource_name":"2005.Trendlines",
      "download_name":"",
      "thumb_name":"TrendLines-mainwindow_thumb_prod.jpg"
   },
 {"id": 24,"name": "2005.Trendlines","resource": "<table cellspacing=\"10px\" class=\"spacer\"><tr><td style=\"width: 45%;\">

<table>
<tr><td class=\"labelColumn\">  Motivation</td><td class=\"infoColumn\">Trendlines was called to life by a group stockchart traders to decorate their stock forecasts. It was used for years at the <a href=\"http://www.trendlines.hu\" target=\"_blank\">http://www.trendlines.hu</a> website. It is not in use anymore to my best knowledge. This project was used to develop and understand the basic blocks of plugin based architectures.</td></tr>
</table>

</td><td style=\"width: 45%;\" rowspan=\"2\" >

<table>
<tr><td class=\"labelColumn\">  Screenshots</td><td class=\"infoColumn\"><p align=\"left\">
<a href=\"content/images/TrendLines-mainwindow.png\" target=\"_blank\"><img src=\"content/images/TrendLines-mainwindow_thumb.jpg\" alt=\"Trendlines windows\" /></a>
<a href=\"content/images/TrendLines-gtk.png\" target=\"_blank\"><img src=\"content/images/TrendLines-gtk_thumb.jpg\" alt=\"Trendlines linux\" /></a>
</p>
</td></tr>
</table>

</td></tr><tr><td>

<table>
<tr><td class=\"labelColumn\">  Features</td><td class=\"infoColumn\"><dl>
  <dt><b>Various input formats</b></dt>
  <dd>
    <ul>
      <li>Single files containing intra-day data</li>
      <li>Single file containing daily data</li>
      <li>Zipped file containing files with daily data</li>
    </ul>
  </dd>
  <dt><b>Persistent data storage</b></dt>
  <dd>
    <ul>
      <li>Seamless dataset updates, backup of datasets on update</li>
      <li>Automatic loading/storing</li>
      <li>Progress indications of data operations</li>
      <li>Unlimited stock handling capability</li>
    </ul>
  </dd>
  <dt><b>Chart rendering</b></dt>
  <dd>
    <ul>
      <li>Japanes candle-stick</li>
      <li>MACD indicator</li>
      <li>RSI indicator</li>
      <li>Volume indicator</li>
    </ul>
  </dd>
  <dt><b>Chart decoration</b></dt>
  <dd>
    <ul>
      <li>Textual comments</li>
      <li>Trend lines.</li>
      <li>Parallel trend lines.</li>
    </ul>
  </dd>
</dl>

</td></tr>

</table>

</td></tr></table>
"},



   {
      "id":5,
      "name":"Turing machine",
      "description":"A Turing-machine built to support the students of my algorithm theory class.",
      "release_date":"2005-03-06",
      "resource_name":"2005.TuringMachine",
      "download_name":"vtm.jar",
      "thumb_name":""
   },
{"id": 25,"name": "2005.TuringMachine","resource": "<table cellspacing=\"10px\" class=\"spacer\"><tr><td  style=\"width: 45%;\">

<table>
<tr><td class=\"labelColumn\">  Motivation</td><td class=\"infoColumn\">I held a practical seminar in algorithm theory at the university in 2004. Although the course was theoretical, I built a Java applet to help the students verify their ideas. I already wrote a command line Turing-machine, when I was learning the subject, so it was not very difficult to turn it into an applet. Here is link to the original (Hungarian) <a href=\"http://delfin.unideb.hu/~vp0006/html/turing.html\" target=\"_blank\">context</a>.</td></tr>
</table>

</td><td style=\"width: 45%;\" rowspan=\"2\">

<table>
<tr><td colspan=\"2\">  </td></tr>
<tr><td class=\"labelColumn\">Applet</td><td class=\"infoColumn\"><p align=\"center\">
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
</td></tr>
</table>

</td></tr><tr><td>

<table>
<tr><td class=\"labelColumn\">  Manual</td><td class=\"infoColumn\">The following steps describe the usage of the VTM applet:
<ol>
  <li>Define the number of the tapes</li>
  <li>Specify an input string</li>
  <li>Input the code to execute. Enter one instruction per line!</li>
  <li>Press the [Run?] button</li>
</ol>
Instruction syntax:
<p><tt>{state} {input}+ -> {state} {output}+ {movements}+</tt></p>
Sample instruction using one tape:
<p><tt>init 1 -> init 1 R</tt></p>
Sample instruction using two tapes:
<p><tt> q1 1 * -> q3 1 1 R R</tt></p>
</td></tr>
</table>

</td></tr></table>
"},



   {
      "id":14,
      "name":"AuToShutdown",
      "description":"A Java based timer application.",
      "release_date":"2006-08-12",
      "resource_name":"2006.Autoshutdown",
      "download_name":"AuToShutdown-3.4.zip",
      "thumb_name":""
   },
 {"id": 26,"name": "2006.Autoshutdown","resource": "<table cellspacing=\"10px\" class=\"spacer\"><tr><td style=\"width: 45%;\">

<table>
<tr><td class=\"labelColumn\">  Latest news</td><td class=\"infoColumn\">The latest version of autoshutdown brings you hiberbation. This feature enables you to hibernate your computer (OS support required) at the well known predefined events. There is another improvement worth mentioning here: the \'Autostart\' feature. With this feature you can automatically start your last settings. If you combine this with the startup functionality of Windows, you can get a nice zombie out of your computer that lets you sleep.
</td></tr>
</table>

</td><td style=\"width: 45%;\"  rowspan=\"3\" >

<table>
<tr><td class=\"labelColumn\">  Screenshot</td><td class=\"infoColumn\">
<p align=\"left\"><img src=\"content/images/autoshutdown-3.4.jpg\" alt=\"Autoshutdown in action\" /></p>
</td></tr>
</table>

</td></tr><tr><td>

<table>
<tr><td class=\"labelColumn\">  Latest version</td><td class=\"infoColumn\">3.4  </td></tr>
<tr><td class=\"labelColumn\">  OS</td><td class=\"infoColumn\">Windows XP+ (32 bit only)</td></tr>
<tr><td class=\"labelColumn\">  Platform</td><td class=\"infoColumn\"><a href=\"http://java.com/\" target=\"_blank\">Java</a> (needs a JVM to run)  </td></tr>
</table>

</td></tr><tr><td>

<table>
<tr><td class=\"labelColumn\">  Features</td><td class=\"infoColumn\">Autostart latest timer settings</td></tr>
<tr><td class=\"labelColumn\">  &nbsp;</td><td class=\"infoColumn\">Hibernation support  </td></tr>
<tr><td class=\"labelColumn\">  &nbsp;</td><td class=\"infoColumn\"><a href=\"http://mplayerhq.hu\" target=\"_blank\">mplayer</a> watcher plugin  </td></tr>
<tr><td class=\"labelColumn\">  &nbsp;</td><td class=\"infoColumn\">System tray support  </td></tr>
</table>

</td></tr></table>
"},



   {
      "id":16,
      "name":"Discreet World",
      "description":"A discreet world simulation for AI agents.",
      "release_date":"2007-04-15",
      "resource_name":"2007.Discreetworld",
      "download_name":"DiscreetWorld-1.1.jar",
      "thumb_name":""
   },
{"id": 27,"name": "2007.Discreetworld","resource": "<table cellspacing=\"10px\" class=\"spacer\"><tr><td style=\"width: 45%;\">

<table>
<tr><td class=\"labelColumn\">  Motivation</td><td class=\"infoColumn\">This small-scale simulation program was inspired by the first few chapters of <a href=\"http://aima.cs.berkeley.edu/\" target=\"_blank\">Artificial Intelligence: A Modern Approach</a>. More specifically the cleaner agent of the vacuum world. My university studies did not include to much about agents that act on thier own. So I got curious enough to implement a synthetic world and develop an agent that tries to make it dust-free. I developed a map visualizer sub-system so you can enjoy the result in real time :) If you are interested in the source code you can find that in the downloadable jar file. The .jar file can also be run as a standalone application.</td></tr>
</table>

</td><td style=\"width: 45%;\" rowspan=\"3\" >

<table>
<tr><td class=\"labelColumn\">  </td><td class=\"infoColumn\">
<p align=\"center\" >
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
</p>
</td></tr>
</table>

</td></tr><tr><td>

<table>
<tr><td class=\"labelColumn\">  How to use</td><td class=\"infoColumn\"><ul>
  <li>First you have to select a map. The agent selector boxes appear. The map defines how many agents can you place on them, so it may vary</li>
  <li>Select a number of agents</li>
  <li>Hit the start button</li>
  <li>You can pause/resume the simulation any time. You can also add or remove agents after stopping the simulation.</li>
</ul>
</td></tr>
</table>

</td></tr><tr><td>

<table>
<tr><td class=\"labelColumn\">  Agents</td><td class=\"infoColumn\"><dl>
  <dt><b>Vercy\'s cleaner agent</b></dt>
  <dd>This agent systematically traverses the map looking for dust. After the whole maps has been revised it returns to its start position</dd>
  <dt><b>Dummy agent</b></dt>
  <dd>The Dummy agent chooses a random action regardless of the sensed data. (It was a great help for debugging, and it looks kind of funny)</dd>
</dl>
  </td></tr>
</table>

</td></tr></table>


"},



   {
      "id":18,
      "name":"Switch",
      "description":"Latest ÜD demo to date",
      "release_date":"2008-06-12",
      "resource_name":"2008.Switch",
      "download_name":"",
      "thumb_name":"switch01_thumb_prod.jpg"
   },
{"id": 28,"name": "2008.Switch","resource": "<table cellspacing=\"10px\" class=\"spacer\"><tr><td style=\"width: 45%;\">

<table>
<tr><td class=\"labelColumn\">  History</td><td class=\"infoColumn\">A demo made in two days :) I hope you enjoy watching it just as much as we enjoyed making it. My part was mostly around the Julia fractal. Switch was ranked 3rd in combined demo category.  </td></tr>
<tr><td class=\"labelColumn\">  Requirements</td><td class=\"infoColumn\">Hardware support for Pixel shader 3.0  </td></tr>
<tr><td class=\"labelColumn\">  Dowload</td><td class=\"infoColumn\">  <a href=\"http://pouet.net/prod.php?which=50921\" target=\"_blank\">Switch</a>
</table>

</td><td style=\"width: 45%;\" rowspan=\"2\">

<table>
<tr><td class=\"labelColumn\">  Video</td><td class=\"infoColumn\"><p align=\"center\"><object width=\"400\" height=\"312\"><param name=\"movie\" value=\"http://capped.micksam7.com/playeralt.swf?vid=mlat_design-switch\" /><param name=\"wmode\" value=\"transparent\" /><param name=\"allowFullScreen\" value=\"true\" /><param name=\"bgcolor\" value=\"#000000\" /><embed src=\"http://capped.micksam7.com/playeralt.swf?vid=mlat_design-switch\" wmode=\"transparent\" bgcolor=\"#000000\" allowFullScreen=\"true\" width=\"400\" height=\"312\" type=\"application/x-shockwave-flash\"></embed></object></p>
  </td></tr>
</table>

</td></tr><tr><td>

<table>
<tr><td class=\"labelColumn\">  Screenshot</td><td class=\"infoColumn\">
<a href=\"content/images/switch01.jpg\" target=\"_blank\"><img src=\"content/images/switch01_thumb.jpg\" alt=\"Switch\" /></a>
<a href=\"content/images/switch02.jpg\" target=\"_blank\"><img src=\"content/images/switch02_thumb.jpg\" alt=\"Switch\" /></a>

</td></tr>
</table>

</td></tr></table>


"},




   {
      "id":19,
      "name":"Klingon Watch",
      "description":"Clock displaying the time using Klingon numerals",
      "release_date":"2009-06-14",
      "resource_name":"2009.Klingonwatch",
      "download_name":"Klingon Watch.zip",
      "thumb_name":""
   },
{"id": 29,"name": "2009.Klingonwatch","resource": "
<table cellspacing=\"10px\" class=\"spacer\"><tr><td  style=\"width: 45%;\">

<table>
<tr><td class=\"labelColumn\">Motivation</td><td class=\"infoColumn\">After watching the 11th \'Star Trek Movie\' I suddenly felt the urge to contribute to the Star Trek scene. I wrote this application in the hope of being able reduce the gap between humanity and the Klingon culture :) The project turned out to be a fun way of spending the weekend.</td></tr>
</table>

</td><td style=\"width: 45%;\" rowspan=\"3\">

<table>
<tr><td class=\"labelColumn\">Screenshot</td><td class=\"infoColumn\">
<p align=\"left\"><img src=\"content/images/klingonOptions.png\" /></p>
</td></tr>
</table>

</td></tr><tr><td>

<table>
<tr><td class=\"labelColumn\">Features</td><td class=\"infoColumn\">Pure .NET 3.5 application (not using architecture specific functions)<br/>
Supports screensaver preview<br/>
Supports multi-monitor configurations<br/>
Customizable digits and glow</td></tr>
</table>

</td></tr><tr><td>

<table>
<tr><td class=\"labelColumn\"> Installation</td><td class=\"infoColumn\"><ol>
<li>Create a folder for the screen saver e.g.: C:\\Klingon\\</li>
<li>Extract the screensaver to the folder</li>
<li>Right click the Screensaver file in explorer so as the explorer context menu pops</li>
<li>Select the \'Install\' menu item from the list</li>
</ol>
<i>WARNING: Windows  does not copy files upon the right click install method</i>
</table>

</td></tr></table>
 "},


   {
      "id":21,
      "name":"nLT",
      "description":"Create flashcards, lookup Japanese words, reviews decks quickly with nLT",
      "release_date":"2010-07-20",
      "resource_name":"2010.nLT",
      "download_name":"nLT.zip",
      "thumb_name":""
   }
{"id": 32,"name": "2010.nLT","resource": "
<table cellspacing=\"10px\" class=\"spacer\"><tr><td  style=\"width: 45%;\">

<table>
<tr><td class=\"labelColumn\">Motivation</td><td class=\"infoColumn\">A long time ago, after starting to learn Japanese I figured flashcards might speed up the process. After taking a look around and finding no suitable tool I started to write my own...</td></tr>
</table>

</td><td style=\"width: 45%;\" rowspan=\"3\">

<table>
<tr><td class=\"labelColumn\">  Screenshots</td><td class=\"infoColumn\"><p align=\"left\">
<a href=\"content/images/nLT.jpg\" target=\"_blank\"><img src=\"content/images/nLT_thumb.jpg\" alt=\"nLT\" /></a>
</p>
</td></tr>
</table>

</td></tr><tr><td>

<table>
<tr><td class=\"labelColumn\">Features</td><td class=\"infoColumn\">Use yakugo.com to lookup unknown words<br/>
Edit word definitions<br/>
Create/Review decks<br/>
Assiciate labels to decks to sort them</td></tr>
</table>

</td></tr><tr><td>

<table>
<tr><td class=\"labelColumn\"> Installation</td><td class=\"infoColumn\"><ol>
<li>Create a folder for the application e.g.: C:\\nLT\\</li>
<li>Extract nLT.exe to the folder</li>
<li>Start nLT.exe (downloads missing components)</li>
</ol>
</table>

</td></tr></table>

"},




{"id": 33,"name": "VercyContact","resource": "<table align=\"center\" class=\"spacer\"><tr><td>

<table>
<tr><td class=\"labelColumn\"> Name　</td><td class=\"infoColumn\">Peter Veres</td></tr>
<tr><td class=\"labelColumn\"> Email　</td><td class=\"infoColumn\">megavercy ät gmail đot com</td></tr>
<tr><td class=\"labelColumn\"> Skype　</td><td class=\"infoColumn\">megavercy</td></tr>
<tr><td class=\"labelColumn\"> Facebook　</td><td class=\"infoColumn\"><a href=\"http://facebook.com/megavercy\" target=\"_blank\">http://facebook.com/megavercy</a></td></tr>
<tr><td class=\"labelColumn\"> Picasa　</td><td class=\"infoColumn\"><a href=\"http://picasaweb.google.com/megavercy\" target=\"_blank\">http://picasaweb.google.com/megavercy</a>　</td></tr>
<tr><td class=\"labelColumn\"> Updated　</td><td class=\"infoColumn\">11 February 2012</td></tr>
</table>

</td></tr></table>"}]