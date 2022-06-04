@extends('layouts/app')

@section('content')

<div class="panel-body">

  @include('common.errors')

  <form id="addform" action="/task" method="POST" class="form-horizontal">

    {{ csrf_field() }}

    <div class="form-group">
      <label for="task" class="col-sm-3 control-label">Task</label>

      <div class="input-group mb-3">
        <input type="text" name="name" id="task-name" class="form-control">
        <button type="submit" form="addform" class="btn btn-primary">Add</button>
      </div>
    </div>

  </form>


  @if(count($tasks)>0)

  <div class="panel panel-decault">
    <div class="panel-heading">
      Current Tasks
    </div>
    <div class="panel-body">
      <table class="table table-striped task-table">
        <thead>
          <th>id</th>
          <th>Task</th>
          <th>&nbsp;</th>
        </thead>
        <tbody>
          @foreach($tasks as $task)
          <tr>
            <td class="table-text">
              <div>
                {{$task->id}}
              </div>
            </td>

            <td class="table-text">
              <div>
                {{$task->name}}
              </div>
            </td>

            <td>
              <form id="deleteform" action="/task/{{$task->id}}" method="POST">
                {{ csrf_field() }}
                {{ method_field('DELETE') }}
                <!-- @method('delete') -->
                <button form="deleteform" type="submit" class="btn btn-danger">Delete</button>
              </form>
            </td>
          </tr>
          @endforeach
        </tbody>
      </table>
    </div>
  </div>
  @endif

</div>

@endsection