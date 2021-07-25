# BordelKód GR-Futball

Demo : https://mobile.creepy-corp.eu/ <br>
IOS & MAC app's : https://github.com/jsupa/GR-GoodBall/raw/main/apple_apps.zip

## IOS app isntall
- open x-code (work with 13.0 beta 3 for me)
- go to Window > Devices and Simulators
- drag and drop ios app to INSTALLED APPS
- enjoy

![](install_tut.gif)

## SQL for leaderboard 
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
