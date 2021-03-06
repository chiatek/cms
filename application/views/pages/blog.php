<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <meta name="subject" content="">

    <!-- Favicon Icon -->
    <link rel="shortcut icon" type="image/x-icon" href="<?php echo site_url('assets/img/admin/favicon.ico'); ?>">
    <link rel="icon" type="image/png" href="<?php echo site_url('assets/img/admin/favicon.png'); ?>">
    <link rel="apple-touch-icon" href="<?php echo site_url('assets/img/admin/avicon.png'); ?>">

    <!-- CSS -->
    <link rel="stylesheet" href="<?php echo site_url("assets/vendor/bootstrap/css/bootstrap.css"); ?>">
    <link rel="stylesheet" href="<?php echo site_url("assets/vendor/fontawesome/css/font-awesome.min.css"); ?>">
    <link rel="stylesheet" href="<?php echo site_url(config('css')); ?>">
</head>
<body>

	<!-- Wrapper -->
	<div class="wrapper">

		<!-- Main Content -->
		<main class="content">

            <?php $this->view("sections/menu", $data); ?>

			<!-- Page Content -->
			<div class="container">

                <div class="row">
                    <div class="col-lg-8">

                        <?php $this->view("sections/blog_home", $data); ?>

                    </div>
                    <div class="col-md-4">

                        <?php $this->view("sections/sidebar_widgets_column", $data); ?>

                    </div>
                </div>

			</div>
			<!-- End Page Content -->

            <?php $this->view("sections/footer"); ?>

		</main>
		<!-- End Main Content -->

    </div>
    <!-- End Wrapper -->

    <!-- Base Javascript -->
    <script src="<?php echo site_url("assets/vendor/jquery/jquery-3.3.1.min.js"); ?>" type="text/javascript"></script>
    <script src="<?php echo site_url("assets/vendor/bootstrap/js/popper.min.js"); ?>" type="text/javascript"></script>
    <script src="<?php echo site_url("assets/vendor/bootstrap/js/bootstrap.min.js"); ?>" type="text/javascript"></script>

</body>
</html>
