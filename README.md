# GR-Futball

IOS & MAC app's : https://github.com/jsupa/GR-GoodBall/raw/main/apple_apps.zip
 
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
