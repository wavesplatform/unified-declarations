//
//  ViewController.swift
//  CryptoExample
//
//  Created by rprokofev on 19/04/2019.
//  Copyright © 2019 Mefilt. All rights reserved.
//

import UIKit
import WavesCrypto

class ViewController: UIViewController {

    @IBOutlet var seedValueLabel: UILabel!
    @IBOutlet var privateKeyValueLabel: UILabel!
    @IBOutlet var publicKeyValueLabel: UILabel!
    
    private let wavesCrypto: WavesCrypto = WavesCrypto()
    
    private var currentSeed: Seed? = nil
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        goGoTits()
    }


    @IBAction func tapButton() {
        goGoTits()
    }
    
    private func goGoTits() {
        
        self.currentSeed = wavesCrypto.randomSeed()
        updateState()
    }
    
    private func updateState() {
        
        guard let seed = self.currentSeed else { return }
        guard let pair = wavesCrypto.keyPair(seed: seed) else { return }
        
        seedValueLabel.text = seed
        privateKeyValueLabel.text = pair.privateKey
        publicKeyValueLabel.text = pair.publicKey
    }
}

