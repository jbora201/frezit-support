@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    <div class="col-sm-4">
						<div class="well boxes">
							<a href="{{ url('/sites') }}" class="btn btn-default btn-block">Websites</a>
							<a href="{{ url('/reports') }}" class="btn btn-default btn-block">Reports</a>
							<a href="{{ url('/sites/add') }}" class="btn btn-default btn-block">Add Website</a>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="well boxes">
							<a href="{{ url('/tickets') }}" class="btn btn-default btn-block">Tickets</a>
							<a href="{{ url('/tickets/complete') }}" class="btn btn-default btn-block">Completed Tickets</a>
							<a href="{{ url('/tickets/create?') }}" class="btn btn-default btn-block">Add New Ticket</a>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="well boxes">
							<a href="{{ url('/account') }}" class="btn btn-default btn-block">Account</a>
							<a href="{{ url('/subscriptions') }}" class="btn btn-default btn-block">Subscriptions</a>
							<a href="{{ url('/subscriptions/add') }}" class="btn btn-default btn-block">Add Subscription</a>
						</div>
					</div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
