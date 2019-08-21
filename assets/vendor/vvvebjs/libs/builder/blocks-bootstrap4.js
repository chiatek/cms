Vvveb.BlocksGroup['menu'] = 
["menu"];
Vvveb.BlocksGroup['footer'] = 
["footer"];
Vvveb.BlocksGroup['content'] = 
["welcome_section_2", "welcome_section_1"];
Vvveb.BlocksGroup['blog'] = 
["sidebar_widgets_column", "blog_post", "comments", "blog_home"];

Vvveb.Blocks.add("menu", {
	name: 'menu',
	dragHtml: '<img src=" + Vvveb.baseUrl + icons/product.png">',
	image: 'http://10.1.10.11/cms/assets/img/admin/thumbnails/menu.jpg',
	html: `
<!-- menu --><nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
	<div class="container">
		<a class="navbar-brand" href="#">CMS Welcome</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

	  	<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<!-- code -->
			<?php

			if ($menu_item->rowCount() > 0) {
				 $list = '<ul class="navbar-nav ml-auto">';

				while ($menu = $menu_item->fetch()) {
					if (isset($menu->menu_parent_id)) {

						if (!isset($menu->menu_parent_order)) {
							$list .= '<li class="nav-item dropdown">'.
									  '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'.$menu->menu_item.'</a>'.
									  '<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">';

							while ($child = $parent_id->fetch()) {
								if ($menu->menu_id == $child->menu_parent_id) {
									$list .= '<a class="dropdown-item" href="'.$child->menu_href.'">'.$child->menu_item.'</a>';
								}
							}

							$list .= '</div></li>';
						}
					}
					else {
						$list .= '<li class="nav-item"><a class="nav-link" href="'.$menu->menu_href.'">'.$menu->menu_item.'</a></li>';
					}

				}
				$list .= '</ul>';

				echo $list;
			}
			else {
				echo "<!-- No menu items found -->";
			}

			?>
			<!-- End code -->
		</div>
	</div>
</nav>
<!-- End menu -->

`,
});

Vvveb.Blocks.add("footer", {
	name: 'footer',
	dragHtml: '<img src=" + Vvveb.baseUrl + icons/product.png">',
	image: 'http://10.1.10.11/cms/assets/img/admin/thumbnails/footer.jpg',
	html: `
<!-- footer --><footer class="page-footer font-small blue">
    <div class="footer-copyright bg-dark text-white text-center py-3" contenteditable="true" spellcheckker="false">© 2019 Copyright:
        <a href="https://yourdomain.com/"> yourdomain.com</a>
    </div>
</footer>
<!-- End footer -->

`,
});

Vvveb.Blocks.add("welcome_section_2", {
	name: 'welcome_section_2',
	dragHtml: '<img src=" + Vvveb.baseUrl + icons/product.png">',
	image: 'http://10.1.10.11/cms/assets/img/admin/thumbnails/welcome_section_2.jpg',
	html: `
<!-- welcome_section_2 --><section class="py-5 bg-image-full" style="background-image: url('https://unsplash.it/1900/1080?image=1081');">
	<div style="height: 200px;"></div>
</section>

<section class="py-5">
	<div class="container">
		<p class="lead" contenteditable="true" spellcheckker="false">This starter page was built using Bootstrap 4</p>
		<p>Bootstrap is the world’s most popular framework for building responsive, mobile-first sites.</p>
		<p class="lead">
			<a class="btn btn-primary btn-lg" href="https://getbootstrap.com" role="button">Learn more</a>
		</p>
	</div>
</section>
<!-- End welcome_section_2 -->

`,
});

Vvveb.Blocks.add("welcome_section_1", {
	name: 'welcome_section_1',
	dragHtml: '<img src=" + Vvveb.baseUrl + icons/product.png">',
	image: 'http://10.1.10.11/cms/assets/img/admin/thumbnails/welcome_section_1.jpg',
	html: `
<!-- welcome_section_1 --><section class="py-5 bg-image-full" style="background-image: url('https://unsplash.it/1900/1080?image=1076');">
	<div style="height: 200px;"></div>
</section>

<section class="py-5">
	<div class="container">
		<h1 contenteditable="true" spellcheckker="false">Welcome to <!-- code --><?php echo config('cms_name'); ?><!-- End code --></h1>
		<p class="lead">If you would like to edit this page navigate to:</p>
		<code>Pages -&gt; All Pages, then select index.php</code>

		<br><br>

		<p class="lead">The corresponding source file for this page is found at:</p>
		<code>application/views/pages/index.php</code>
	</div>
</section>
<!-- End welcome_section_1 -->

`,
});

Vvveb.Blocks.add("sidebar_widgets_column", {
	name: 'sidebar_widgets_column',
	dragHtml: '<img src=" + Vvveb.baseUrl + icons/product.png">',
	image: 'http://10.1.10.11/cms/assets/img/admin/thumbnails/sidebar_widgets_column.jpg',
	html: `
<!-- sidebar_widgets_column --><div class="sidebar-widgets-column">
	<!-- Search Widget -->
	<div class="card my-4">
		<h5 class="card-header">Search</h5>
		<div class="card-body">
			<form action="<?php echo site_url('posts/filter'); ?>" method="post">
				<div class="input-group">
					<input type="text" class="form-control" name="query" placeholder="Search for...">
					<span class="input-group-btn">
						<button class="btn btn-secondary" type="submit">Go!</button>
					</span>
				</div>
			</form>
		</div>
	</div>

	<!-- Categories Widget -->
	<div class="card my-4">
		<h5 class="card-header">Categories</h5>
		<div class="card-body">
		<!-- code -->
		<?php
			if (isset($widget_category)) {
				$column = 1;
				$count = 1;

				while ($category = $widget_category->fetch()) {
					if ($column == 1) {
						echo '<div class="row">';
					}

					echo '<div class="col-lg-6">
							<ul class="list-unstyled mb-0">
								<li>
									<a href="'.site_url('posts/category/'.$category->category_slug).'">'.$category->category_name.'</a>
								</li>
							</ul>
						</div>';

					if ($column == 2 || $count == $widget_category->rowCount()) {
						echo '</div>';
						$column = 1;
					}
					else {
						$column++;
					}

					$count++;
				}
			}
		 ?>
	 	<!-- End code -->
		</div>
	</div>

	<!-- Side Widget -->
	<div class="card my-4">
		<h5 class="card-header">Side Widget</h5>
		<div class="card-body">
			You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
		</div>
	</div>
</div>
<!-- End sidebar_widgets_column -->

`,
});

Vvveb.Blocks.add("blog_post", {
	name: 'blog_post',
	dragHtml: '<img src=" + Vvveb.baseUrl + icons/product.png">',
	image: 'http://10.1.10.11/cms/assets/img/admin/thumbnails/blog_post.jpg',
	html: `
<!-- blog_post --><!-- code -->
<?php if (isset($post) && isset($config) && isset($categories)): ?>
    <!-- Title -->
    <h1 class="mt-4"><?php echo $post->post_title; ?></h1>
    <!-- Author -->
    <p class="lead">by <?php echo $post->post_author; ?></p>

    <hr>
    <!-- Date/Time -->
    <?php $date = new DateTime($post->post_modified); ?>
    <p>Posted on <?php echo $date->format($config->setting_datetime); ?></p>

    <h5>
        <?php while ($category = $categories->fetch()): ?>
            <div class="badge badge-secondary mt-1 mr-1"><?php echo $category->category_name; ?></div>
        <?php endwhile; ?>
    </h5>

    <!-- Preview Image -->
    <img class="img-fluid rounded mt-2" src="<?php echo $post->post_image; ?>" alt="">

    <!-- Post Content -->
    <div class="text-justify">
        <p><?php echo $post->post_body; ?></p>
    </div>

    <hr class="mb-5 pb-3">
<?php else: ?>
    <div class="jumbotron"><h6>blog_post.php</h6></div>
<?php endif; ?>
<!-- End code -->
<!-- End blog_post -->

`,
});

Vvveb.Blocks.add("comments", {
	name: 'comments',
	dragHtml: '<img src=" + Vvveb.baseUrl + icons/product.png">',
	image: 'http://10.1.10.11/cms/assets/img/admin/thumbnails/comments.jpg',
	html: `
<!-- comments --><!-- code -->
<?php if (isset($post) && isset($config) && isset($comments)): ?>
	<?php if ($config->setting_comments): ?>
		<div class="card my-4">
			<h5 class="card-header">Leave a Comment:</h5>
			<div class="card-body">
				<form action="<?php echo site_url('posts/comments/'.$post->post_id); ?>" method="post">
					<div class="form-group">
						<label class="form-label">Name</label>
			            <input type="text" class="form-control" name="comment_name">
			            <br />
			            <label class="form-label">Comment</label>
						<textarea class="form-control" name="comment_text" rows="3"></textarea>
						<br />
						<p class="text-danger"><?php echo $this->form_validation->validation_errors(); ?></p>
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
		<?php if ($total_comments > 0): ?>
			<?php while ($comment = $comments->fetch()): ?>
			<div class="media my-3">
				<img src="<?= site_url('assets/img/admin/user-av.jpg'); ?>" class="d-flex mr-3 rounded-circle" height="50" width="50" alt="Avatar">
				<div class="media-body">
					<?php $date = new DateTime($comment->comment_date); ?>
					<h6 class="mt-0"><?php echo $comment->comment_name; ?> &nbsp;<small><i><?php echo $date->format($config->setting_datetime); ?></i></small></h6>
						<?php echo $comment->comment_text; ?>
				</div>
			</div>
			<?php endwhile; ?>
		<?php endif; ?>
	<?php endif; ?>
	<br /><br />
<?php endif; ?>
<!-- End code -->
<!-- End comments -->

`,
});

Vvveb.Blocks.add("blog_home", {
	name: 'blog_home',
	dragHtml: '<img src=" + Vvveb.baseUrl + icons/product.png">',
	image: 'http://10.1.10.11/cms/assets/img/admin/thumbnails/blog_home.jpg',
	html: `
<!-- blog_home --><!-- code -->
<?php if (isset($posts)): ?>
<h1 class="my-4">Blog
	<small>Home</small>
</h1>

<!-- Blog Post -->
<?php if ($posts->rowCount() > 0): ?>
	<?php while ($post = $posts->fetch()): ?>
	<div class="card mb-4">
		<img class="card-img-top" src="<?php echo $post->post_image; ?>" alt="Card image cap">
		<div class="card-body">
			<h2 class="card-title"><?php echo $post->post_title; ?></h2>
			<div class="text-justify">
				<?php if (class_exists('posts')): ?>
				<p class="card-text"><?php echo get_summary($post->post_body, config('summary_sentence_limit')); ?></p>
				<?php else: ?>
				<p class="card-text"><?php echo $post->post_body; ?></p>
				<?php endif; ?>
			</div>
			<a href="<?php echo site_url('posts/'.$post->post_slug); ?>" class="btn btn-primary">Read More →</a>
		</div>
		<div class="card-footer text-muted">
			<?php $date = new DateTime($post->post_modified); ?>
			Posted on <?php echo $date->format($config->setting_datetime); ?> by
			<?php echo $post->post_author; ?>
		</div>
	</div>
	<?php endwhile; ?>
	<br />
<?php else: ?>
	<div class="card mb-4">
		<div class="card-body">
			<p class="card-text">No posts found</p>
		</div>
	</div>
<?php endif; ?>

<!-- Pagination -->
<?php if (!empty($links)) { echo $links; } ?>

<br /><br />

<?php else: ?>
    <div class="jumbotron"><h6>blog_home.php</h6></div>
<?php endif; ?>
<!-- End code -->
<!-- End blog_home -->

`,
});

