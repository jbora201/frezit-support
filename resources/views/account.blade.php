@extends('master')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">My Account</div>

                <div class="panel-body">
                    <div class="col-sm-3">
					</div>
					<div class="col-sm-9">
						<label>Name:</label>
						<input type="text" value="{{ Auth::user()->name }}" disabled>
						<label>Email:</label>
						<input type="text" value="{{ Auth::user()->email }}" disabled>
						<form method="post" action="{{ url('account') }}">
						<label>Phone:</label>
						<input type="text" value="{{ Auth::user()->phone }}">
						<label>Registered on:</label>
						<p>{{ Auth::user()->created_at }}</p>
						<input type="submit" class="btn btn">
						</form>
					</div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
