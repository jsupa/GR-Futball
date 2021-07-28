# BordelKód GR-Futball <img src="https://visitor-badge.glitch.me/badge?page_id=jsupa.gr-goodball"> <img src="https://wakatime.com/badge/github/jsupa/GR-GoodBall.svg">

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y246Y0V)

Demo : https://mobile.creepy-corp.eu/ <br>
IOS & MAC app's : https://github.com/jsupa/GR-GoodBall/raw/main/apple_apps.zip <br>
Time spent : https://wakatime.com/@jsupa/projects/wqwlosnwqa

## IOS app isntall
- open x-code (work with 13.0 beta 3 for me)
- go to Window > Devices and Simulators
- drag and drop ios app to INSTALLED APPS
- enjoy
- if not work try <a href="https://github.com/jsupa/WebView">xcode project</a>

![](install_tut.gif)

## SQL for leaderboard 

in https://github.com/jsupa/GR-GoodBall/blob/main/load.php <br>
change SQL credences to own

```SQL
CREATE TABLE `leaderboard` (
  `id` int(11) UNSIGNED NOT NULL,
  `nickname` text,
  `score` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `leaderboard`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `leaderboard`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
```
## Preview Gameplay

![](mobile.gif)
