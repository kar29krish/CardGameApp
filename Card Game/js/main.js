/*
         * main.js
         */
        $(document).ready(function(){
            alert('App started');

            // Here is call to binding we are handling to display the cards for the first time by calling the playingCards()
            var cardDeck = $("#cardDeck").playingCards();
            cardDeck.spread(); 

            var hand = [];
            var showError = function(msg){
                $('#error').html(msg).show();
                setTimeout(function(){
                    $('#error').fadeOut('slow');
                },3000);
            }

            //display drawn cards
            var showHand = function(){
                //alert('Inside drawn');
                var el = $('#yourHand')
                el.html('');
                for(var i=0;i<hand.length;i++){
                    el.append(hand[i].getHTML());
                }
            }

            // display shuffled cards
            var doShuffle = function(){
               // alert('Inside Shuffle');
                cardDeck.shuffle();
                cardDeck.spread(); // update card table
            }

            // display error case
            var doDrawCard = function(){
                var c = cardDeck.draw();
                if(!c){
                    showError('no more cards');
                    return;
                }
                hand[hand.length] = c;
                cardDeck.spread();
                showHand();
            }
            var doOrderByRank = function(){
                 //alert('Inside orderbynumber');
                cardDeck.orderByRank();
                cardDeck.spread(); // update card table
            }
            var doOrderBySuit = function(){
                //alert('Inside Suit');
                cardDeck.orderBySuit();
                cardDeck.spread(); // update card table
            }

            var drawSort = function(){
             //alert('Inside DrawSort');
                yourHand.orderBySuit();
                yourHand.spread(); // sort the drawn cards
            }

            //click actions is handled here

            $('#shuffler').click(doShuffle);
            $('#draw').click(doDrawCard);
            $('#shuffleDrawSort').click(function(){
                drawSort();
            });
            $('#addCard').click(function(){
                if(!hand.length){
                    showError('your hand is empty');
                    return;
                }
                var c = hand.pop();
                showHand();
                cardDeck.addCard(c);
                cardDeck.spread();
            });
            $('#orderByRank').click(doOrderByRank);
            $('#orderBySuit').click(doOrderBySuit);

        });
        /*
        if (window.addEventListener) {
            window.addEventListener("load",initPlayingCards,false);
        } else if (window.attachEvent) {
            window.attachEvent("onload",initPlayingCards);
        } else {
            window.onload = function() {initPlayingCards();}
        }
        function initPlayingCards() {
            cardDeck = new playingCards();
        }
        */