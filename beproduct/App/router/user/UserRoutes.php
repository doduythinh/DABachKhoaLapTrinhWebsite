<?php

// action là callback

$router->post('/v1/user/login', 'UserController@login');

$router->post('/v1/user/signup', 'UserController@signup');

$router->get('/v1/user/getall', 'UserController@getAllUser');