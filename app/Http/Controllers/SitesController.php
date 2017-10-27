<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SitesController extends Controller
{
     public function __construct()
    {
        $this->middleware('auth');
    }
	public function view(){
		return view('sites');
	}
}
