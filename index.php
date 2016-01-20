<link rel="stylesheet" href="jike/css/bootstrap.min.css" />
<style>
    #wrap{
        width: 600px;
        border: solid 1px blue;
    }
</style>
<div>
    <form id="wrap">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group">
            <label for="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile" class="form-control">
            <p class="help-block">Example block-level help text here.</p>
        </div>
        <div class="checkbox">
            <label>
                <input type="checkbox"> Check me out
            </label>
        </div>
        <div class="form-group">
            <select class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>

    </form>

<!--    <form class="form-inline">-->
<!--        <div class="form-group">-->
<!--            <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>-->
<!--            <div class="input-group">-->
<!--                <div class="input-group-addon">$</div>-->
<!--                <input type="text" class="form-control" id="exampleInputAmount" placeholder="Amount">-->
<!--                <div class="input-group-addon">.00</div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <button type="submit" class="btn btn-primary">Transfer cash</button>-->
<!--    </form>-->


    <form class="form-horizontal">
        <div class="input-group">
            <label for="exampleInputAmount" class="col-xs-1">username</label>
            <div class="col-xs-3">
                <div class="input-group">
                    <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
                    <input type="text" class="form-control" id="exampleInputAmount" placeholder="Amount">
                    <div class="input-group-addon"><span class="glyphicon glyphicon-ok"></span></div>
                </div>
            </div>

        </div>
    </form>
</div>
