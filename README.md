# BordelKód GR-Futball <img src="https://visitor-badge.glitch.me/badge?page_id=jsupa.gr-goodball"> <img src="https://wakatime.com/badge/github/jsupa/GR-GoodBall.svg">

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y246Y0V)

Demo : https://mobile.creepy-corp.eu/ <br>
Design : https://www.figma.com/file/7I3HRiq6xN5aBrig8JRZCm/Untitled?node-id=0%3A1 <br>
IOS & MAC app's : https://github.com/jsupa/GR-GoodBall/raw/main/apple_apps.zip <br>
Time spent : https://wakatime.com/@jsupa/projects/wqwlosnwqa

## IOS app install
- open x-code (work with 13.0 beta 3 for me)
- go to Window > Devices and Simulators
- drag and drop ios app to INSTALLED APPS
- enjoy
- if not work try <a href="https://github.com/jsupa/WebView">xcode project</a>

![](install_tut.gif)

## SQL for leaderboard 

in https://github.com/jsupa/GR-GoodBall/blob/main/load.php <br>
change <a href="https://github.com/jsupa/GR-GoodBall/blob/50bc7300dc9e4ebddcffbcfa950c587b551391c5/load.php#L5">SQL credences</a> to own

```SQL
CREATE TABLE `leaderboard` (
  `id` int(11) UNSIGNED NOT NULL,
  `nickname` text,
  `score` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `leaderboard`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `leaderboard`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
```
## Preview Gameplay

![](mobile.gif)
