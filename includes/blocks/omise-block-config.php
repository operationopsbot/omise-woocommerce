<?php

use Automattic\WooCommerce\StoreApi\StoreApi;
use Automattic\WooCommerce\StoreApi\Schemas\ExtendSchema;

class Omise_Block_Config {

    // Automattic\WooCommerce\Blocks\Registry\Container
    private $container;

    public function __construct($container) {
        $this->container = $container;
        $this->register_payment_methods();
        $this->container->get( Omise_Block_Payments::class );
    }

    private function register_payment_methods() {
        // register the payments API
        $this->container->register( Omise_Block_Payments::class, function ( $container ) {
            return new Omise_Block_Payments( $container );
        } );
    }
}
