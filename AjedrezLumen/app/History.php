<?php

namespace App;


class History extends Model 
{
    

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        //id usuario blanco , id oponente , id resultado
        'startDate','endDate','start date', 'numberMovements', 'lostPieces', 'winPieces', 'tableroI', 'initialBoard',
    ];

    
}
