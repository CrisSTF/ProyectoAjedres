<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Moves extends Model 
{
 

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        //id hitory,
        'since', 'until', 'order',
    ];
}
